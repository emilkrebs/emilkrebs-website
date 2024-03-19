import RenderMarkdown from '../components/markdown';

const markdown = `

# Privacy Policy

## What information do we collect?

We do not collect any personal information from visitors to this website. This means we do not collect any data that could be used to identify you individually, such as your name, email address, phone number, or IP address.

## How do we use your information?
Since we do not collect any personal information from you, there is no information for us to use.
Sharing your information

We do not share any personal information with third parties because we do not collect any.

## Cookies

This website does not use cookies. Cookies are small data files that a website transfers to your computer's hard drive when you visit the site. They allow the website to remember certain information about you, such as your preferences or browsing history.

## Third-party links

This website may contain links to other websites operated by third parties. We are not responsible for the privacy practices of any third-party websites. We encourage you to be aware of when you leave our website and to read the privacy statements of any other website that you visit.

## Changes to this privacy policy

We reserve the right to update this privacy policy at any time. We will notify you of any changes by posting the new privacy policy on this website.

## Contact us

If you have any questions about this privacy policy, please contact me at [emil.krebs@outlook.de](mailto:emil.krebs@outlook.de).

The source code for this website is available on [GitHub](https://github.com/emilkrebs/emilkrebs.dev).
`;

export default function PrivacyPolicy() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-start p-4">
			<section className="flex flex-col justify-center items-center gap-2 gap-x-4 w-full h-full p-4">
				<RenderMarkdown content={markdown} />
			</section>
		</main>
	);
}