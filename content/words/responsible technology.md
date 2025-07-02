---
title: Adventures in Responsible Technology
tags: posts
type: essay
published: 2025-07-01
date: 2025-07-01
---

The I've grown increasingly distrustful of Technology Inc™ over the years. Not that I've ever been terribly trusting of cooperate interests, but that impulse[^1] has only sharpened with time.

My ongoing distrust led to small actions here and there. I nuked my Facebook profile, abandoned Twitter, gravitated towards small indie software with sustainable pricing models, made a habit of paying for my tools, moved my email off of Google[^2], stuff like that.

But then last October the read-it-later service I'd been using shut down and I started really thinking how to take a bit more ownership in, and have a bit more responsibility for, the tools I use. This piece is less theoretical (not none theory, just _less_), more applied. A mixture of "reflections on" and "high level how-to" (*how-to get started*, at least) on taking a bit more responsibility for the technology I rely on.

It's been a fun and rewarding process, and I'm increasingly convinced these types of small-scale, seeming low-stakes, agency-increasing projects are in fact profoundly important to pushing back the encroaching _waving around_ fascism. A long time ago wrote a bunch of words that I would like to revisit and turn into a proper piece about how companies that make invest a lot in imagining the world as it could be (typically in ways that maximize profits), and those ideas, through the things they make, shape the world we do in fact live in, which in turn shapes the things we see as possible to do with the tools at our disposal (see, not _none_ theory).

We can and should stretch our imaginations a bit and look past the world that Apple and Samsung and Google and Microsoft and all the others have built for us. We should try to build a something from our own imaginations. There are many ways this shows up, often under the enormous (and enormously cool) tent called "DIY".

So anyway, for reasons mostly unrelated to DIY (games) I recently built a PC. I've got a whole a draft about it and one day I'll let everyone make fun of my build. What matters for the framing of this piece is: it's running Linux. And that's where I'll start recounting my recent adventures.

## Adventures in Linux
I've been an Apple guy pretty much forever. I like to tinker and hack but I also like my phone being, at the end of the day, a phone. I don't want an antivirus for my phone (don't worry I'm getting to the PC part), I only kinda want apps for my phone. I also like privacy and security while also being lazy, so I've made quite a home inside the Apple Walled Garden and that is unlikely to change. That being said, I have always believed in the core ideas behind Linux. I also hate every new version of Windows more than the last.

When it was time to choose an OS for this gaming PC, Linux was the fairly obvious answer. Until somewhat recently this probably would have been terrible idea for a gaming PC with an NVIDIA card. Steam has done a lot of work on that front and the team over at System 76 has their own Ubuntu based <abbr title="distribution, a type of Linux that makes it even better. Sometimes also called &ldquo;flavors&rdquo;">disto</abbr>.

If you're not already a Linux user, just taking one small step out of whichever ecosystem you're used to opens up a number of really useful horizons for even more ownership of your tools.

### System 76's Pop!\_OS: a pleasant Linux experience
Pop!\_OS is based on Ubuntu, one of the more common linux versions out in the world, with some nice additions that make life easier and are specifically designed to run well on System 76 hardware. It runs great on a lot of hardware though.

In all honesty I found Pop!\_OS easier to install and get running than Windows:

1. Download the image and make an installer (a fancy flash drive)
2. Prep the install location: it's possible to dual boot linux a modern Mac, but it's probably not for the faint of heart[^3]
3. Get through the BIOS boot stuff and install
4. Install some apps

I used a guide from [It's FOSS][It's foss pop os] and was up and running with the apps I wanted in about an hour. I wouldn't say it's replaced my Mac Mini as a daily driver yet, but I find myself shifting more and more of my computer activities over to the PC in one way or another.

[It's foss pop os]: https://itsfoss.com/install-pop-os/

## Adventures in home servers
Running a “home server” sounds like a huge and incredibly unnecessary ordeal, but if you’ve got a Linux computer that you can leave on and connected to your home network, you’re pretty much already doing it. A home server opens up so many cool ways to take a more active role in your technology use, from privacy focused or customizable replacements for services you use to reducing reliance on [companies that seem to actively hate their customers](https://www.hollywoodreporter.com/business/business-news/netflix-disney-now-pushing-subscribers-to-ad-tiers-1235572459/) and the artists who create content we love.

There are a number of really [good guides to getting started](https://www.pcworld.com/article/406209/how-to-have-a-linux-home-server-on-the-cheap.html), and I’ll likely build on this piece to add my own guides eventually[^timemachine]. I’ve found [r/selfhosted][] and [r/homelab][] to be great places to start. Just make sure you don’t ignore the advice to configure a firewall[^firewallvpn] and start with a couple of low stakes things first so there isn’t too much pain if you need to tear it all down and start over.

For the brave and self-sacrificing: the services you host on your server can be shared with friends and family. It’s a whole ball of wax and well beyond the scope of this already too-long write-up, but the mission is yours should you choose to accept it.

Here are a couple of things I’ve found useful to do in my server aventures:

### YAMS: an easy way to set up a home media server
[YAMS, Yet Another Media Server](https://yams.media), is a super simple and well documented install script that walks you through installing everything you need to set up your own little replacement for most of the streaming services in your life. Follow the steps and you’ll get a media server of your choice (Plex, Emby, or Jellyfin, each with their own advantages and tradeoffs) and a set of media procurement tools, if that’s your thing (🏴‍☠️[^youwouldntdownload]).

My partner and I find it very satisfying to maintain our own collection of media. We can fix weird subtitle issues and adjust the sound levels to what works best for us, find the specific edition (or editions) we want, create personal lists around themes or moods, and set up custom posters and tags. And since it’s all within our home network, it still works if the internet (or some important part of the internet) is down.

It’s also very nifty to combine your media server with Karakeep (below) and audiobookshelf (a whole other post, forthcoming) to keep video essays, YouTube documentaries, podcasts, and fan videos available offline and in one place.

### Pi-hole: block ads and creepy telemetry
Most digital ad services are terrible for privacy, and installing a reputable adblocker is a great way to keep them from snooping. But modern TVs and a lot of smart home devices are a much bigger privacy threat, and you can’t install ad blockers on them. This is the sort of problem Pi-hole addresses. There are a couple of alternatives, and there are a lot of optimizations you could make beyond the initial configuration[^dedicatedDNS].

[^dedicatedDNS]: like running it on a dedicated piece hardware since, fair warning, just about your entire network will go down if DNS is offline.

It’s a domain name server that blocks all sorts of snoop-related traffic from ever establishing a connection back to home base. It’s pretty simple to set up, but it can take a little bit of fiddling to unblock some things you might actually want. I had to unblock a couple domains to get iCloud Drive working.

Pi-hole is especially useful if you set each device to use your pi-hole server directly as the DNS provider, rather than how some routers will set themselves as as the nameserver and then route to the servers you set up. Going direct lets you set up rules for specific devices and device groups (maybe a bit more permissive for your laptop with it’s own ad blocker and completely locked down for the TV)

A couple of tips to make local DNS work a bit better:
- get a router that supports custom DNS settings for DCHP, this will let you get the benefits of “going direct” while skipping the need to configure DNS _on_ each device.
- turn off Private Wi-Fi Address on Apple devices on your home network. It’s not very clear unless you dig into the documentation, but this is a per-network setting that rotates your device’s <abbr title="medium/media access control address: a unique ID for a network interface, not actually related to being an Apple Mac device">MAC address</abbr>. Turning it off makes it possible to assign static IP addresses and do other “oh we recognize this device” tricks.
- Skip down to the section about Tailscale and put your devices into a VPN with your local DNS to take your adblocking everywhere.

Hosting your own DNS nameserver also lets you do cool tricks with reverse proxies, turning the messy collection of IP address-plus-port-numbers that you usually have with self hosted services into easy to remember short names (like jellyfin.home.arpa, which is what we use to access Jellyfin).

### Readeck: read-later that works with Obsidian
At the top I mentioned how my journey kicked into gear because I wanted a better read-it-later service. For me, “better” meant:
- Not going away (rip pocket, rip omnivore)
- Integrated with my workflows (mainly Obsidian and Safari, across desktop and mobile)
- Support for highlighting and commenting

Readeck fits the bill. It’s super easy to set up, has all the features I’m looking for, and importantly works with Obsidian even while self hosted. It doesn’t hurt that it’s free—Instapaper is great, but money is money and paying for something that wasn’t quite right felt like a drag.

### Karakeep: bookmark archiving and video downloading
I’m still working out how exactly Karakeep fits in with Readeck, since at the core they both manage a list of bookmarks. Karakeep doesn’t do highlighting, but it does do archiving, as in full page archives and media downloading. This is great for saving and organizing all sorts of things. While I haven’t tested these features out yet, Karapeep also supports auto tagging using LLMs, including light weight locally run models.

Karakeep also has a solid API and supports webhooks, so with some elbow grease it can become a central inbox for all the digital detritus and treasures you pick up while internet exploring.

### Tailscale: it's like you're always at home
All of the stuff you run on your server will be, unless you really want to go deep, available only within the confines of your network, which typically means “while at home”. A VPN lets you extend the edges of your network to wrap around all your devices regardless of where they are or what network they’re actually connected to.

Tailscale is a VPN service. It isn’t something you host on your own server, and there are more punk-ish DIY ways to accomplish the effect here, but it’s by far the easiest one to start with. I used Ethan Madison’s [Jellyfin Remote Access with Tailscale](https://www.ethanmad.com/post/jellyfin_remote_access/) guide to get things working and added other services as I went along.

## More adventures
### iOS shortcuts app: pretty handy
Apps can be a privacy nightmare, especially free single purpose utilities and [health trackers](https://www.consumerreports.org/health/health-privacy/are-health-apps-putting-your-privacy-at-risk-a1118223508/), though [paying for an app doesn’t guarantee privacy](https://www.ftc.gov/system/files/documents/public_events/1415032/privacycon2019_catherine_han.pdf).

On iOS, there’s an easy (and somewhat fun) way around this: Shortcuts.

My favorite example: instead of an app like water minder, I created my own scrappy water tracker using shortcuts — complete with progress bar. I think it took me around 15 minutes of messing with it and it works well enough to keep me hydrated with no third parties involved.

For a more advanced trick: my partner doesn’t like most reading list apps, so we built a shortcut to read book barcodes and add them to the spreadsheet she’s building to manage our bookshelves, her reading progress, and her tbr list[^4].

It’s become a fun exercise to reroute from “I wonder if there’s an app for that” to “I wonder if I can build a shortcut for that”, which I’ve found leads somewhat naturally to “I wonder if I can write a script for this”. The feeling of solving your own problem (even somewhat jankishly) is incredibly satisfying.

### Domain names: a little corner of the internet
to quote Nora Reed’s [Website Manifesto](https://nora.zone/manifesto.html)
> The reason to choose paying the $15/year over the Neocities/Glitch option is that if you pick Neocities/Glitch and it goes to shit, you're back on having to set yourself up all over again. If you own your domain name, you can transfer it from one registrar to another, and you can host your website from a huge number of places. But it's better than not having a website!

This is particular relevant since [Glitch is shutting down](https://blog.glitch.com/post/changes-are-coming-to-glitch/), meaning that anyone using Glitch in Bio is now squarely “back on having to set yourself up all over again”.

Choose a domain name that makes you happy and use it for silly projects. You can use your domain name as a Bluesky handle, for email addresses, to host a website or a mastodon server. You can also use a domain name to make your self hosted services easier to access, even if you keep them locked to your local network. Imagine the joy of typing “tv.[yourinsidejokedomainname].garden”. Domain names are fun.

### Fastmail: goodbye Google
Email is a tricky one. You can’t really self host it, at least not if you want anyone to receive your emails. That being said, there are a lot of reasons to move your email away from Gmail and onto a service you pay for. Deciding where to move your email to can be a bit nuanced, as different services and the countries in which they’re based have their own implications for your threat model.

For me, the main goals were to have an email address with my own domain and to get my emails away from Google’s recently-less-than-stellar track record with training AI models on customer data.

My service provider has been Fastmail. It’s great for both email and calendar, and their implementation of [filters and rules](https://www.fastmail.help/hc/en-us/articles/1500000278122-Filters-Rules) makes it really easy to automatically sort messages to keep the inbox clean[^newslettersorting].

[^newslettersorting]: for example: maintain a dedicated address and a contacts group for newsletters and use a filter to move those out of the inbox and forward them to Feedbin to read along with my other news feeds.

### The fediverse, group texts, and small social networks
Network effects are so real, which means getting off \[terrible site/app/network] is less a function of your own desire to do so and more a function of convincing the people around you to get off \[terrible site/app/network] without disappearing into the dark forest[^darkforest]. It’s a bit of the prisoner’s dilemma if we’re honest.

I’ve dabbled a bit in hosting Discord and Mastodon servers for various community or friend groups, but I haven’t found the right mix. I’ve also tried a few times to kickstart a habit of posting on Pixelfed (a Fediverse instagram replacement) and Signal stories, but it hasn’t stuck yet. I barely remember to post on Mastodon (or this here personal website) instead of just on Bluesky. But I can sense the attachment to Instagram (really the main social media site I’d love to ditch) weakening.

When I respond to friends’ stories, it doesn’t take much to move the convo from the Meta monstrosity that is Instagram DMs/Messenger to a good ol fashioned text or Signal chat. Some of these one-on-one chats have turned into small group chats. They might eventually run dry for a little and then spring back to life at various points.

Distrust aside, I don’t think any of us really _enjoy_ Facebook or Instagram. We’re just there because, allegedly, the people or groups we care about are there too. But we can choose to be elsewhere, and we can invite others to join us there. That’s what I’m doing and it seems to be working.

I figure if I can get enough friends to default to texting me, and then get enough of those friends into small group chats with each other, perhaps we can, together, venture back out into public with a Mastodon server we run collectively or something.


## some concluding thoughts and continuing adventures
I briefly [considered breaking this up](https://bsky.app/profile/threlk.net/post/3lsootumnqc2g) into a couple smaller pieces, then decided against that (sorry!) because I think taken together all the little sections above have the same “so-what”:

We’re constrained by what we see as possible, and right now what we see is mostly shaped by interests beyond our own. Taking even a half step in the direction of something different opens the horizons, even more if you take that step with others, building collective capacity to imagine and act.

Calling community DIY radically liberatory isn’t new or terribly profound, but it’s worth repeating and reminding each other of. Doing things, together, for our collective selves is the basis of community. We need to invest in community right now, and that means divesting, where we can, from systems and tools and ways of building things that do not nurture healthy community.

I don’t think everyone needs to run a home server for all their computing needs. I might, however, be close to saying that most groups (friends, colleagues, comrades, co-strugglers) should run at least some of their own infrastructure.

For example, your HOA could run an alternative to Discord (Matrix for the nerdy, Mattermost for the pragmatists) and Zoom (Jitsi) with a bit of determination and usually not too much gnashing of teeth. You might run Pixelfed and [Wanderer](https://wanderer.to) with your outdoorsy buddies or work with a few friends across town to set up “personal” weather stations.

These are the sorts of ideas on my mind lately, small knowledge projects and DIY infrastructure as ways to increase resiliency and agency in the various, interconnected and (hopefully) intersectional communities we exist in. Go forth and may a thousand docker containers bloom.




[^1]: likely the product of being a eldest child with an independent streak raised in a somewhat actually-honest-to-god libertarian current. [Growing up in the valley](https://buttondown.com/FutureResearch/archive/growing-up-in-the-valley/) has more about that.

[^2]: well mostly... turns out this is pretty hard to after a couple of decades of using the same email address

[^3]: I haven't used it but [Asahi Linux](https://asahilinux.org/) seems like a solid project, though I would recommend getting separate hardware, like a [Raspberry PI kit](https://www.canakit.com/raspberry-pi-500-desktop-kit.html?cid=USD&variant=UK&src=raspberrypi) or a Thinkpad or, for more DIY opportunities: a mini desktop PC to use as a server.

[^4]: it’s, uh, more of a database. More on that ✨soon✨

[^darkforest]: As an aside: I keep returning to Erin Kissane’s writing, especially her piece [Against the Dark Forest](https://www.wrecka.ge/against-the-dark-forest/). Her thoughts on community, both online and off, echo a great many of my own.

[^timemachine]: a guess I’ve already started this collection with my piece about setting up time machine backups to a netatalk host [Linux as Time Machine backup server for MacOS systems](/2025-03-06/linux-as-time-machine-backup-server-for-macos-systems/)

[^youwouldntdownload]: ~~if~~ since, _like me_, you are an upstanding citizen and prefer not to sail the high seas, it’s I usefully to note that the collection of DVDs you got from Goodwill makes an excellant catalog for your personal Netflix alternative. The YAMS stack will still set you up with a good base, just disable the Docker containers you’re not planning to use after install.

[^firewallvpn]: my own configuration can be summed up “lock it down” — I block all IP addresses that aren’t part of my home network and have specific services (like ssh) restricted to just the devices I plan to use them with. See the section on Tailscale for how to make this a bit less restrictive than you might expect.


[r/selfhosted]: https://www.reddit.com/r/selfhosted/
[r/homelab]: https://www.reddit.com/r/homelab/
