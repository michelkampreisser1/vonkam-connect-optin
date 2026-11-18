# PREFORCLOSURE.MIAMI

Create a professional website structure for Vonkam Technologies that is fully compliant with Twilio A2P 10DLC messaging regulations.

The goal is to allow customers to submit their phone number and explicitly opt in to receive SMS messages related to influencer marketing campaigns, promotions, and updates.

Build the following pages and components:

1. Main Website

Domain placeholder: https://vonkam.com

Sections:

Hero section explaining Vonkam Technologies

Services: Influencer marketing campaigns and brand partnerships

Contact section where users can submit their phone number

2. SMS Opt-In Contact Form (Critical for Twilio)

Create a form with these fields:

Full Name

Email

Phone Number

Company (optional)

Include a required checkbox with this exact compliance language:

"I consent to receive SMS notifications, alerts, and occasional marketing messages from Vonkam Technologies. Message frequency varies. Message and data rates may apply. Text HELP to get help. Text STOP to unsubscribe."

The checkbox must not be pre-checked.

Under the form add:

"No mobile information will be shared with third parties or affiliates for marketing or promotional purposes."

3. Privacy Policy Page

URL:

/privacy-policy

Include:

What data we collect

How we use the information

Phone number usage

SMS consent usage

Data protection

Important clause:

"Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."

4. Terms and Conditions Page

URL:

/terms

Include an SMS Terms section explaining:

By opting in, users agree to receive SMS messages from Vonkam Technologies

Message frequency varies

Message and data rates may apply

Reply STOP to unsubscribe

Reply HELP for help

5. Footer Compliance Links

Add a footer with links to:

Privacy Policy

Terms & Conditions

Contact

This is required for Twilio review.

6. SMS Opt-In Disclosure (Important)

On the page where users enter their phone number include this disclosure clearly:

"By submitting this form and signing up for texts, you consent to receive text messages from Vonkam Technologies at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel."

7. Business Information Section

Include a section that describes the business:

Vonkam Technologies is a marketing and influencer campaign platform that connects brands with university influencers. Businesses can submit their information to receive campaign updates, onboarding instructions, and campaign notifications via SMS.

8. Clean Simple Design

Design style:

modern startup

minimal

black / white / orange accents

professional SaaS look

9. Export Requirement

Output should include:

homepage

contact page with SMS opt-in

privacy policy page

terms and conditions page

footer with compliance links

Information you will send back to the Twilio reviewer

Once Lovable builds the site, you will reply with something like:

Website URL

https://vonkam.com

Opt-in page

https://vonkam.com/contact

Privacy Policy

https://vonkam.com/privacy-policy

Terms

https://vonkam.com/terms

Opt-in method

Users enter their phone number through the contact form and must check a consent box agreeing to receive SMS messages from Vonkam Technologies.

Important (This is why Twilio rejects most campaigns)

Make sure the site shows:

✔ phone number form
✔ consent checkbox
✔ privacy policy
✔ terms page
✔ SMS language

Without these Twilio auto-rejects.

💡 One more thing I strongly recommend for your setup (since you’re building automation with Supabase + Make):

Add double opt-in SMS confirmation.

Example:

User submits phone number

They receive:

Vonkam Technologies: Reply YES to confirm you want to receive SMS updates from us. Reply STOP to cancel.

Only send messages after YES.

This dramatically increases Twilio approval rate.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vonkam-connect-optin.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f24d974e-9406-4566-9d19-9fd88035300b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
