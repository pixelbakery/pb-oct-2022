---
title: 'Gmail: How to Automatically Delete or Archive Emails After A Certain Number of Days'
subtitle: Writing a Google Script to help keep your work email sane
excerpt: Writing a Google Script to help keep your work email sane
# Cover Photos MUST be 4x3 resolution
coverImage: /img/blog/pixelbakery-auto-delete-arcive-gmail.jpg
date: '2021-04-10'
categories: ['education']
tags: ['automation', 'gmail', 'google scripts', 'gsuite', 'javascript', 'Tutorial']
author:
  name: Jordan Lambrecht
ogImage:
  url: /img/blog/pixelbakery-auto-delete-arcive-gmail.jpg
---

We use Gmail and Gsuite as our primary email providers at Pixel Bakery. As is the case with everyone else, I'm constantly bombarded with automated emails about updates, shipping orders, security alerts, product surveys, 'gurus' offering their SEO services, and a billion other things. Generally, by day's end, I'll receive about 50 emails on my PB account and 30-40 on my personal. It's overwhelming and a heft task to get my inbox down to 0. For the most part, I enlist a barrage of filters (close to 200) to weed out emails I don't want or need. But what about the emails that I WANT to see but aren't what I would consider 'mission critical'?

I like getting shipping confirmations and updates, but all I need is a glance at the subject line and forget about it. The solution: tell Gmail to archive or delete certain emails after a specified number of days. Surprisingly enough, Gmail does not have this as a native feature. Users can set filters to automatically delete emails from certain senders or with keyword pattern matches, sure, but that's an instant filter and those emails never see the light of day.

I scoured the internet for a solution, but apparently, no one has revisited the subject since circa 2012. The result was a lot of abandoned Reddit threads and deleted files. I finally stumbled upon a very very old post with a screenshot of some code inserted into [Google Scripts](https://script.google.com/). Not really ideal and not easily implantable, so I took it upon myself to rebuild the script and add some modernization to it.

This solution creates a Google Script that looks at your Gmail inbox for emails that have a certain label applied to them and then runs an appropriate function based on that label name once a day. We combine this with the use of Gmail's automatic filtering system to create an easy-to-manage solution to a bloated inbox. Here's a link to a [GitHub Gist](https://gist.github.com/jordanlambrecht/ec6ad36b5a48271fcbb4bb811512e477) the actual [Google Apps Script](https://script.google.com/d/1BW2AqvwUSbd9fID36fszLLUKkEmu8gj0FfKjyKanEwV7OGgzQuxHZS9e).

## Step 01: Set Up Gmail Labels

For the script to work, it needs information on what to archive and delete. The way we do this is by using Gmail's labels. Set up two new labels, one called "archive me" and one called "delete me". Within Gmail, navigate to the cog icon in the top right of the screen and select 'See All Settings' -> Labels. Make sure the labels are all lowercase, as it's case-sensitive.

## Step 02: Set Up Gmail Filters

Once you have your labels set up, create a few automatic filters so we can test our script. Don't feel obligated to create them all at once. It's a daunting process that will happen dynamically over time as emails come in. A great starting place is Amazon emails. Select an email you want the script to run on. From there, select the three horizontal dots at the top of the email and hit "Filter Messages Like These". Within this window, you can enter any of the parameters that you want the filter to automatically apply to. You can mix and match these to suit your needs, but are three main approaches to this:

1.  Applying the filter to ALL emails from a certain domain. For this, you would remove any additional text fields and enter \*@amazon.com. The asterisk acts as a wildcard
2.  Applying the filter to certain addresses from a domain. For example, orders@amazon.com
3.  Applying the filter to subject-line matches. For example, you could enter the words "has shipped", which applies the label to any subject, regardless of which domain or email address it's coming from. This is great if you get similar emails from different places. A great example of this is "confirmation code". I get a lot of 2FA login requests with codes to log into a different website. I don't really need these after I get the number, but I always forget to delete the email afterward.

Note: It's always going to be better to set BOTH a subject and an email domain. This will help prevent any mess-ups and accidental deletions.

Once you have your filter criteria figured out, hit Create Filter. Select either 'delete me' or 'archive me', depending on what you want our script to do with the email, followed by 'apply to X matching conversations'. This will make sure it's applied to emails that already exist.

## Step 03: Create the Script

Now for the good part. Let's get our script operational and running. In a new browser tab, navigate to [scripts.google.com](https://scripts.google.com/). Create a new script, name it, and paste our code into it. I have the default set to two days for both the 'autoDelete' and 'autoArchive' functions. You can change them by editing the variable delayDays on lines 3 and 35 respectively. Save your code.

Before we move on, we need to tell Scripts to use the Gmail service and grant it access to that scope. While still in the code editor, navigate to the nav item on the left labeled 'Services'. Locate Gmail API and hit Add.

While we're here, let's also give our file a more user-friendly name than code.gs. Again in the left-hand panel, hover the filename, select the three dots to the right, and hit rename file. I set mine to autodeletearchive.gs, but this is arbitrary.

## Step 04: Create Triggers

We have our code ready to go, but we need to tell Gmail when to execute it. Select the Triggers nav item on the left. We'll need to create two different triggers for the two respective scripts. In the bottom right of the Triggers section, select Add Trigger. You'll leave most of the options alone, but we'll want to change the execution time. If we trigger our script every hour, Gmail will think we're trying to spam the system and block our script. Select the function you want to trigger, 'autoDelete', and change Select type of time-based trigger to 'Daily'. Repeat these steps with 'autoArchive'. Additionally, if you'd like to set up error reporting, you can do so in the right pane. I left my time as the default 'midnight to 1 am'.

<video autoPlay muted controls='false' playsInline>
<source src="/img/blog/PixelBakery.com_Gmail-Auto-Delete_Run-Script-1" />
</video>
![Image](https://pixelbakery.co/wp-content/uploads/2021/04/PixelBakery.com_Gmail-Auto-Delete_Run-Script-1.mp4)

## Step 05: Testing and Deployment

We're almost done! All that's left is to do a test run to make sure everything is working correctly. Double-check your inbox to make sure there are a few test emails that have both labels 'archive me' and 'delete me' applied to them. Navigate back to the code editor and hit Run. If all goes according to plan, a new dialogue pane should pop up at the bottom of your window and output a ton of data. Do this one more time, but select the function autoArchive from the dropdown instead. Feel free to hit the run time a few more times if it times out due to the number of emails it needs to process. After your first run, double-check your trash folder to make sure your auto-filters aren't deleting anything they're not supposed to.

## Conclusion

That's it! We've successfully written a script to automatically delete and/or archive emails after a certain amount of days. It'll most likely take a few days for the script to process the entirety of your Gmail inbox, especially if you're like me and have 10,000+ emails archived. Enjoy new, your less-cluttered life =]
