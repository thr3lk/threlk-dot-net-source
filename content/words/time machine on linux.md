---
title: Linux as Time Machine backup server for MacOS systems
tags: posts
type: guide
# layout: guide
published: 2025-03-06
date: 2024-11-22
---
## Two paths: Samba and Netatalk
**Samba** is faster at data transfer, but flakey with powernap and background tasks — backups will probably fail while your MacOS systems are asleep, but it’s what I started with and it will back up faster when it works. (an update with these details coming soon-ish)

**Netatalk** is slower but can host proper(ish?) Time Machine services over AFP, so your backups will actually work while your MacOS systems nap. this is how I’m currently running things.

## Step zero: setting up the filesystem for backups
regardless which path you use, you'll need somewhere to put the backups. I mount a the physical disks that make up my network storage  to `/drivepool`, then mount a fuse filesystem to `/srv/share` this is only important so that you have the context needed to translate these steps to your own machine.

at the end of the day, you just need a directory to put the backups into. It doesn't need to be encrypted: you're encrypting the Time Machine backups on the host side anyway.

# the Netatalk way
first, a few acknowledgements
- main inspiration:
[Daniel P. Gross: Linux-based Time Machine backup server using Netatalk and ZFS](https://dgross.ca/blog/linux-time-machine-server/)
- and a bit from: [Sam Hewitt: Using a Linux Server for Time Machine Backups](https://samuelhewitt.com/blog/2015-09-12-debian-linux-server-mac-os-time-machine-backups-how-to)

the overview:
- configure user(s) for backup directory access
- install and configure netatalk/AFP for Time Machine
- configure the firewall for netatalk time machine
- configure your MacOS systems to use the backup destination

### configure user(s) for backup directory access
```terminal
sudo useradd --no-create-home --home-dir /backup --shell /usr/sbin/nologin timemachine
```
```terminal
sudo chown -R timemachine:timemachine /srv/share/backups
```
```terminal
sudo chmod og-rwx /srv/share/backups
```

you'll also want to set a password for the time machine user. This will be important when setting up your MacOS systems.
```terminal
sudo passwd timemachine
```
### install and configure netatalk/AFP for Time Machine
install netatalk. as with all things this is easy unless your package manager ecosystem makes it hard (debian, alegedly)
```terminal
sudo apt update && sudo apt install -y netatalk
```

you'll need to create a file for your netatalk config: `/etc/netatalk/afp.conf`

```toml
[Time Machine]
path = /srv/share/backup
time machine = yes
valid users = timemachine
```

save that config and restart netatalk

```
sudo service netatalk restart
```

and go ahead and add some enteries to systemctl
```terminal
sudo systemctl enable netatalk.service
```
```terminal
sudo systemctl start netatalk.service
```
```terminal
sudo systemctl enable avahi-daemon.service
```
```terminal
sudo systemctl start avahi-daemon.service
```

### Configuring firewall for Netatalk and Time Machine
ht to [Unix & Linux: What ports need to be open for netatalk to work as a Time Machine server on my LAN?](https://unix.stackexchange.com/questions/357968/what-ports-need-to-be-open-for-netatalk-to-work-as-a-time-machine-server-on-my-l)

you'll, allegedly, need to following ports open, both tcp and udp (I haven't confirmed every item on this list, but I have them open and it's working):

| port | protocol |
| ---- | -------- |
| 7    | upd/tcp  |
| 206  | upd/tcp  |
| 548  | upd/tcp  |
| 427  | upd/tcp  |
| 1900 | upd/tcp  |
| 1935 | upd/tcp  |
| 5353 | upd/tcp  |

#### UFW and Netatalk for Time Machine
I use UFW at the moment. you can create a file in `/etc/ufw/applications.d/` to hold app or service related rules that can be enabled and disabled with `ufw allow <service>` and will show up cleanly in response to `ufw status`, like this:

```terminal
justin@machine$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
[...]
time machine               ALLOW       192.168.1.0/24
[...]
```

I, creatively, called mine `timemachine`

```toml
[time machine]
title=Time Machine via Netatalk
description=netatalk services for facilitating Time Machine backups
ports=7,206,427,548,1900,1935,5353/tcp|7,206,427,548,1900,1935,5353/udp
```

enable the rule
```terminal
sudo ufw allow from {IP adress}/{subnet mask} to any app <profile name>
```

note: `<profile name>` is, in this case `"time machine"` not `timemachine` as you might initially assume based on the file-based configuration.


for more on UFW rules:
- [Ask Ubuntu: How do I add UFW rules and a comment/name?](https://unix.stackexchange.com/questions/508283/how-do-i-add-ufw-rules-and-a-comment-name)
- [Ask Ubuntu: UFW: Allow app/profile only from specific IP](https://askubuntu.com/questions/1360434/ufw-allow-app-profile-only-from-specific-ip)
- [how do you create an app profile for ufw?](https://askubuntu.com/questions/409013/how-do-you-create-an-app-profile-for-ufw)
- <https://help.ubuntu.com/community/UFW>

### Configure your MacOS systems to use the Netatalk server backup destination

out of the box, MacOS may not want to show your fancy new Time Machine server. if that's the case, set your MacOS systems to show unofficial Time Machine destinations.

```terminal
defaults write com.apple.systempreferences TMShowUnsupportedNetworkVolumes 1
```

configure Time Machine as usual, and use the username and password set when configuring users and access.

if you have existing backups (I did, as I was switching away from the Samba way), those sparsebundles will be there waiting for you unless you deleted them. Time Machine will ask if you want to use or erase the existing backup. If you want to keep your backups rolling, provide the password for your existing encrypted backups and be on your marry way.

if you get an error while attempting to use the existing backups, it's likely becasue you skipped the `-R` in `chown -R` above. ask me how I know.

an upside I hadn't considered with this path is your MacOS systems will not show the Time Machine share as a browseable folder. this might not be a benefit to you, or you may not care. I think it keep things cleaner and less likely that random files end up in the time machine directory.

# the Samba way
_coming soon_
