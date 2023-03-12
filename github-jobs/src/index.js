import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// const data = {
// 	search_metadata: {
// 		id: '640272fa5f2203be99df9fd7',
// 		status: 'Success',
// 		json_endpoint:
// 			'https://serpapi.com/searches/94ea18df6d1bbf83/640272fa5f2203be99df9fd7.json',
// 		created_at: '2023-03-03 22:21:46 UTC',
// 		processed_at: '2023-03-03 22:21:46 UTC',
// 		google_jobs_url:
// 			'https://www.google.com/search?q=jobs+in+london&ibp=htl;jobs',
// 		raw_html_file:
// 			'https://serpapi.com/searches/94ea18df6d1bbf83/640272fa5f2203be99df9fd7.html',
// 		total_time_taken: 9.82,
// 	},
// 	search_parameters: {
// 		q: 'jobs in london',
// 		engine: 'google_jobs',
// 		google_domain: 'google.com',
// 	},
// 	jobs_results: [
// 		{
// 			title: 'Client Support Specialist',
// 			company_name: 'Barclays',
// 			location: 'London, UK',
// 			via: 'via Barclays Careers',
// 			description:
// 				"Client Support Specialist\r\nLondon\r\n\r\nAs a Barclays Client Support Specialist, you will join the Corporate Digital Banking Team within Client Service Business Area. You will be instrumental in providing excellent service to the bank’s corporate clients. You will be responsible for using available tools and resources to handle servicing requests and general queries from clients in the most efficient way.\r\nBarclays is one of the world's largest and most respected financial institutions, with 329 years of success, quality and innovation behind us. We offer careers that provide endless opportunity – helping millions of individuals and businesses thrive, and creating financial and digital solutions that the world now takes for granted.\r\n\r\nHybrid Working\r\nWe are currently operating in a hybrid working environment, meaning that many colleagues spend part of their working hours at home and part in the office, depending on the nature of the role they are in. Please discuss the detail of the working... pattern options for the role with the hiring manager\r\n\r\nWhat will you be doing?\r\n• Responding to servicing or channels related requests received from clients, as well as those from other business areas and third parties where appropriate\r\n• Providing world-class service, using skills and knowledge to understand the request and taking appropriate action\r\n• Acting as a knowledgeable point of contact for technical and procedural queries handling request within your remit or using knowledge of the business area\r\n• Servicing clients in line with current processes to ensure requests are actioned right first time\r\n• Advocating for digital capabilities and enhancements being delivered so that informed and knowledgeable conversations can be held with clients\r\n• Identifying opportunities for clients to transfer their servicing needs to more efficient and cost-effective self-serve channels\r\n• Working closely with the rest of the team providing mutual support by training, coaching and sharing of knowledge and best practices\r\n• Supporting and testing products or version enhancements\r\n\r\nWhat we’re looking for:\r\n• Exposure to Client Channels e.g. Barclays.Net, iPortal, Bacs\r\n• Experience in systems such as Siebel, AFTS, QMS, etc\r\n• Confident with Computer literacy\r\n• Proactive focus towards request resolution efficiency, quickly and accurately\r\n\r\nSkills that will help you in the role:\r\n• Exposure to customer service skills\r\n• Excellent communication skills\r\n• Ability to adapt to change\r\n• Ability to drive self-development\r\n\r\nWhere will you be working?\r\nIn the heart of Canary Wharf, our headquarters at Churchill Place boasts onsite amenities such as; a gym, staff restaurant and deli bar, and is easily accessible by tube and bus links. With a population of around 5000 staff the atmosphere is second to none with a real buzz being created around the offices within.\r\n\r\n#LI-Hybrid\r\n\r\n#LI-L21",
// 			job_highlights: [
// 				{
// 					items: [
// 						"Client Support Specialist\r\nLondon\r\n\r\nAs a Barclays Client Support Specialist, you will join the Corporate Digital Banking Team within Client Service Business Area. You will be instrumental in providing excellent service to the bank’s corporate clients. You will be responsible for using available tools and resources to handle servicing requests and general queries from clients in the most efficient way.\r\nBarclays is one of the world's largest and most respected financial institutions, with 329 years of success, quality and innovation behind us. We offer careers that provide endless opportunity – helping millions of individuals and businesses thrive, and creating financial and digital solutions that the world now takes for granted.\r\n\r\nHybrid Working\r\nWe are currently operating in a hybrid working environment, meaning that many colleagues spend part of their working hours at home and part in the office, depending on the nature of the role they are in. Please discuss the detail of the working... pattern options for the role with the hiring manager\r\n\r\nWhat will you be doing?\r\n• Responding to servicing or channels related requests received from clients, as well as those from other business areas and third parties where appropriate\r\n• Providing world-class service, using skills and knowledge to understand the request and taking appropriate action\r\n• Acting as a knowledgeable point of contact for technical and procedural queries handling request within your remit or using knowledge of the business area\r\n• Servicing clients in line with current processes to ensure requests are actioned right first time\r\n• Advocating for digital capabilities and enhancements being delivered so that informed and knowledgeable conversations can be held with clients\r\n• Identifying opportunities for clients to transfer their servicing needs to more efficient and cost-effective self-serve channels\r\n• Working closely with the rest of the team providing mutual support by training, coaching and sharing of knowledge and best practices\r\n• Supporting and testing products or version enhancements\r\n\r\nWhat we’re looking for:\r\n• Exposure to Client Channels e.g. Barclays.Net, iPortal, Bacs\r\n• Experience in systems such as Siebel, AFTS, QMS, etc\r\n• Confident with Computer literacy\r\n• Proactive focus towards request resolution efficiency, quickly and accurately\r\n\r\nSkills that will help you in the role:\r\n• Exposure to customer service skills\r\n• Excellent communication skills\r\n• Ability to adapt to change\r\n• Ability to drive self-development\r\n\r\nWhere will you be working?\r\nIn the heart of Canary Wharf, our headquarters at Churchill Place boasts onsite amenities such as; a gym, staff restaurant and deli bar, and is easily accessible by tube and bus links. With a population of around 5000 staff the atmosphere is second to none with a real buzz being created around the offices within.\r\n\r\n#LI-Hybrid\r\n\r\n#LI-L21",
// 					],
// 				},
// 			],
// 			related_links: [
// 				{
// 					link: 'https://www.barclays.com/',
// 					text: 'barclays.com',
// 				},
// 				{
// 					link: 'https://www.google.com/search?ucbcb=1&q=Barclays&sa=X&ved=0ahUKEwikncn75cD9AhX3cWwGHZMYC9gQmJACCL0J',
// 					text: 'See web results for Barclays',
// 				},
// 			],
// 			extensions: ['Full-time', 'No degree mentioned'],
// 			detected_extensions: {
// 				schedule_type: 'Full-time',
// 			},
// 			job_id: 'eyJqb2JfdGl0bGUiOiJDbGllbnQgU3VwcG9ydCBTcGVjaWFsaXN0IiwiaHRpZG9jaWQiOiJVSm1BSTdLWThXOEFBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVOUWQycHFVbk5tWVY5cGRqVnpUME5WTkV4QmFrRjRSMVkxYUVJNGRWZEtPVEpOZG1GM01VMURUamwzWlZOaFgya3hTa0kyYUdsclJVcFVTbEZVUVhvNVdrb3RNemxCTVZSc1Z6ZHhTM1p2VWtka1FVVlBNakJGU0VKWGIxbFZVR2hhWDNCcFExODViRUZKYjFRd1ZFdHpjbWRWZVROdlRFeDFRbmhMTTB4a1RtVlpURkYwY20xaWRHNUtkMGRpUm1sMGVFZHBZbEZrYzFWWGNHMVZWVlYwVFZKT2JEUmlRbGRzWTE5eGNVMVJWamhtT1RVMEVoZEJNMDFEV2s5VFVFSmZabXB6WlUxUWF6ZEhjM2RCTUJvaVFVWmZOazFCVG1nNGVFTkxRa3N5TkhFeWRVMDRaRXhZYVVWUldYbFVhbWN4VVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6Ii5uRmcyZWJ7Zm9udC13ZWlnaHQ6NTAwfS5CaTZEZGN7Zm9udC13ZWlnaHQ6NTAwfUFwcGx5IG9uIEJhcmNsYXlzIENhcmVlcnMiLCJsaW5rIjoiaHR0cHM6Ly9zZWFyY2guam9icy5iYXJjbGF5cy9qb2IvbG9uZG9uL2NsaWVudC1zdXBwb3J0LXNwZWNpYWxpc3QvMTMwMTUvNDEwOTQ2NTg5NjA/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==',
// 		},
// 		{
// 			title: 'Luggage Porter',
// 			company_name: 'SOFITEL, Accor Hotels',
// 			location: 'London, UK',
// 			via: 'via Accor Careers',
// 			description:
// 				'Job Description\nWe treat our people like family and our guest like royalty!\r\n\r\nWe are looking for a Luggage Porter who will represent our brand by delivering and exceeding our guest expectations.\r\n\r\nWork Experience\r\n\r\nWhat we are looking for:\r\n• Previous experience as a Luggage Porter in a hotel would be beneficial but not essential\r\n• A smart and professional appearance\r\n• A positive attitude and good communication skills\r\n• A willingness to take on physically demanding job\r\n\r\nBenefits\r\n\r\nWhat do we offer:\r\n\r\nOur Luggage Porter receive some excellent Company benefits:\r\n• A very competitive salary\r\n• 28 days paid holiday with an extra 5 days, following 5 years’ service\r\n• Discounted hotel room rates across our hotels, for you and friends and family\r\n• Fantastic Training and Development opportunities\r\n• Uniform and Complimentary Dry Cleaning\r\n• Free Meals on shift\r\n• Unrivalled Career Progression prospects\r\n\r\nApply now to be our new Luggage Porter!',
// 			job_highlights: [
// 				{
// 					items: [
// 						'Job Description\r\n\r\nWe treat our people like family and our guest like royalty!\r\n\r\nWe are looking for a Luggage Porter who will represent our brand by delivering and exceeding our guest expectations.\r\n\r\nWork Experience\r\n\r\nWhat we are looking for:\r\n• Previous experience as a Luggage Porter in a hotel would be beneficial but not essential\r\n• A smart and professional appearance\r\n• A positive attitude and good communication skills\r\n• A willingness to take on physically demanding job\r\n\r\nBenefits\r\n\r\nWhat do we offer:\r\n\r\nOur Luggage Porter receive some excellent Company benefits:\r\n• A very competitive salary\r\n• 28 days paid holiday with an extra 5 days, following 5 years’ service\r\n• Discounted hotel room rates across our hotels, for you and friends and family\r\n• Fantastic Training and Development opportunities\r\n• Uniform and Complimentary Dry Cleaning\r\n• Free Meals on shift\r\n• Unrivalled Career Progression prospects\r\n\r\nApply now to be our new Luggage Porter!',
// 					],
// 				},
// 			],
// 			related_links: [
// 				{
// 					link: 'https://www.sofitel-vogue.com/',
// 					text: 'sofitel-vogue.com',
// 				},
// 				{
// 					link: 'https://www.google.com/search?ucbcb=1&q=SOFITEL,+Accor+Hotels&sa=X&ved=0ahUKEwikncn75cD9AhX3cWwGHZMYC9gQmJACCOkJ',
// 					text: 'See web results for SOFITEL, Accor Hotels',
// 				},
// 			],
// 			thumbnail:
// 				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSml5dPAGl65WBkpXjlGk_7O27_eUiULMw7WtJLuM&s',
// 			extensions: ['Full-time', 'No degree mentioned'],
// 			detected_extensions: {
// 				schedule_type: 'Full-time',
// 			},
// 			job_id: 'eyJqb2JfdGl0bGUiOiJMdWdnYWdlIFBvcnRlciIsImh0aWRvY2lkIjoidWNadzNWVExkRUFBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVTlFkMnBxVVVoVlIybENaRWxpWVZWbWJEaHBTVUY0Y2tnMGNuQklZMDloTjBkTU5rUkNPVXBvTFY5Q04yaHlVWGRRVVdWZmNXWlFiREUzT0RKWmFEZG5aV1pJYkdKc1RtNWtXVlk1UlRkMWFXZDFPR05oUlRKaVluY3dNMjFIYTFvelJYZGZXRWh3WXpkNVFtNVhkRTU1Y0dacU1GOXJRWEl6TUdSZk5UUkdNRXBMUkVaaGRVb3RXV3RJWlZKRmNYRTNiMjVEU3psR2FsVXROWFZ1WlhKUmNVWTBabTlUWlROb01EaFlZV1J3TVc1WE5XaEpFaGRCTTAxRFdrOVRVRUpmWm1welpVMVFhemRIYzNkQk1Cb2lRVVpmTmsxQlVIUkxZV05QYWtSbWFGRjNiR3BUTmxsdFJ6Sk9VQzFHYzJRMmR3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMyIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBkaXJlY3RseSBvbiBBY2NvciBDYXJlZXJzIiwibGluayI6Imh0dHBzOi8vY2FyZWVycy5hY2Nvci5jb20vZ2xvYmFsL2VuL2pvYi9QLTEyNDcxNS9MdWdnYWdlLVBvcnRlcj91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19',
// 		},
// 		{
// 			title: 'Baggage Agent Service, United Kingdom - LHR',
// 			company_name: 'American Airlines',
// 			location: 'London, UK',
// 			via: 'via Jobs At American Airlines',
// 			description:
// 				"Location: London Heathrow Apt (LHR-TRML)\r\n\r\nRequisition ID: 62029\r\n\r\nPlease make sure that you have the legal right to work and live in the U.K. The possession of an U.S. or E.U. passport does not qualify for a work permit in the U.K.\r\n\r\nIntro\r\n\r\nAre you ready to explore a world of possibilities, both at work and during your time off? Join our American Airlines family, and you’ll travel the world, grow your expertise and become the best version of you. As you embark on a new journey, you’ll tackle challenges with flexibility and grace, learning new skills and advancing your career while having the time of your life. Feel free to enrich both your personal and work life and hop on board!\r\n\r\nWhy you'll love this job\r\n\r\nYou will be responsible for the reconciliation, loading and unloading of customer baggage in a state of the art baggage facility. The role also entails the safe transportation of customers’ baggage to and from the aircraft parking area. There is an expectation that you will have a... general understanding of working in an airside and security restricted zone and at all times they will behave in a responsible manner in a busy, complicated and at times a noisy working environment. On a day to day basis, you will take instruction from the baggage Crew Chiefs. The position is shift work based, including weekends and Bank Holidays.\r\n\r\nWhat you'll do\r\n• Provide a consistently high quality baggage handling service\r\n• Use a hand held security device to reconcile and load baggage into containers may be required\r\n• Use a hand held device to re-flight baggage\r\n• Drive specialized equipment to transport the baggage containers to and from the aircraft\r\n• Work closely with and take instructions from the Baggage Crew Chiefs responsible for that work area\r\n• Conduct any relevant administrative duties\r\n• Represent American Airlines by adhering to the uniform standards and by adopting a customer focused approach at all times\r\n• Promote any and all American Airlines products and services to our customers\r\n• Complete all compulsory training by given deadlines (e.g. SAI and DG)\r\n• Promote safe working practices all times\r\n• Carry out any other reasonable duties consistent with the post\r\n\r\nAll you'll need for success\r\n\r\nMinimum Qualifications- Education & Prior Job Experience\r\n• Be physically fit and able to walk long distances over the course of a regular shift\r\n• Be able to continually lifting baggage weighing up to 23kg over the course of a regular shift\r\n• For baggage weighing over 32kg, you will work as a team to lift it safely\r\n• Be able to work as part of a small team\r\n• Be able to work effectively with minimum supervision\r\n• Be willing to work in a shift environment (including weekends and Bank Holidays)\r\n• Have the ability to communicate both written and verbally to a high standard\r\n• Hold a valid EU driving license and be willing and able to pass the HAL driving test\r\n• Have a well groomed appearance & adhere to the uniform standards at all times\r\n• Be reliable and punctual\r\n• Comply with all American Airlines policies and procedures\r\n• Be able to obtain a valid Heathrow airside security pass\r\n• Hold a valid BAA airside pass, or have the ability to hold one\r\n• Completed GSAT training\r\n• Be willing and able to successfully complete all relevant training\r\n\r\nPreferred Qualifications- Education & Prior Job Experience\r\n• Previous experience of working for an airline\r\n• Basic computer skills (Word, Excel, PowerPoint, Outlook)\r\n\r\nFeel Free to be yourself at American\r\n\r\nFrom the team members we hire to the customers we serve, inclusion and diversity are the foundation of the dynamic workforce at American Airlines. Our 20+ Employee Business Resource Groups are focused on connecting our team members to our customers, suppliers, communities and shareholders, helping team members reach their full potential and creating an inclusive work environment to meet and exceed the needs of our diverse world.\r\n\r\nAre you ready to feel a tremendous sense of pride and satisfaction as you do your part to keep the largest airline in the world running smoothly as we care for people on life’s journey? Feel free to be yourself at American.\r\n\r\nJob Level: 70\r\n\r\nRequisition ID: 62029",
// 			job_highlights: [
// 				{
// 					items: [
// 						"Location: London Heathrow Apt (LHR-TRML)\r\n\r\nRequisition ID: 62029\r\n\r\nPlease make sure that you have the legal right to work and live in the U.K. The possession of an U.S. or E.U. passport does not qualify for a work permit in the U.K.\r\n\r\nIntro\r\n\r\nAre you ready to explore a world of possibilities, both at work and during your time off? Join our American Airlines family, and you’ll travel the world, grow your expertise and become the best version of you. As you embark on a new journey, you’ll tackle challenges with flexibility and grace, learning new skills and advancing your career while having the time of your life. Feel free to enrich both your personal and work life and hop on board!\r\n\r\nWhy you'll love this job\r\n\r\nYou will be responsible for the reconciliation, loading and unloading of customer baggage in a state of the art baggage facility. The role also entails the safe transportation of customers’ baggage to and from the aircraft parking area. There is an expectation that you will have a... general understanding of working in an airside and security restricted zone and at all times they will behave in a responsible manner in a busy, complicated and at times a noisy working environment. On a day to day basis, you will take instruction from the baggage Crew Chiefs. The position is shift work based, including weekends and Bank Holidays.\r\n\r\nWhat you'll do\r\n• Provide a consistently high quality baggage handling service\r\n• Use a hand held security device to reconcile and load baggage into containers may be required\r\n• Use a hand held device to re-flight baggage\r\n• Drive specialized equipment to transport the baggage containers to and from the aircraft\r\n• Work closely with and take instructions from the Baggage Crew Chiefs responsible for that work area\r\n• Conduct any relevant administrative duties\r\n• Represent American Airlines by adhering to the uniform standards and by adopting a customer focused approach at all times\r\n• Promote any and all American Airlines products and services to our customers\r\n• Complete all compulsory training by given deadlines (e.g. SAI and DG)\r\n• Promote safe working practices all times\r\n• Carry out any other reasonable duties consistent with the post\r\n\r\nAll you'll need for success\r\n\r\nMinimum Qualifications- Education & Prior Job Experience\r\n• Be physically fit and able to walk long distances over the course of a regular shift\r\n• Be able to continually lifting baggage weighing up to 23kg over the course of a regular shift\r\n• For baggage weighing over 32kg, you will work as a team to lift it safely\r\n• Be able to work as part of a small team\r\n• Be able to work effectively with minimum supervision\r\n• Be willing to work in a shift environment (including weekends and Bank Holidays)\r\n• Have the ability to communicate both written and verbally to a high standard\r\n• Hold a valid EU driving license and be willing and able to pass the HAL driving test\r\n• Have a well groomed appearance & adhere to the uniform standards at all times\r\n• Be reliable and punctual\r\n• Comply with all American Airlines policies and procedures\r\n• Be able to obtain a valid Heathrow airside security pass\r\n• Hold a valid BAA airside pass, or have the ability to hold one\r\n• Completed GSAT training\r\n• Be willing and able to successfully complete all relevant training\r\n\r\nPreferred Qualifications- Education & Prior Job Experience\r\n• Previous experience of working for an airline\r\n• Basic computer skills (Word, Excel, PowerPoint, Outlook)\r\n\r\nFeel Free to be yourself at American\r\n\r\nFrom the team members we hire to the customers we serve, inclusion and diversity are the foundation of the dynamic workforce at American Airlines. Our 20+ Employee Business Resource Groups are focused on connecting our team members to our customers, suppliers, communities and shareholders, helping team members reach their full potential and creating an inclusive work environment to meet and exceed the needs of our diverse world.\r\n\r\nAre you ready to feel a tremendous sense of pride and satisfaction as you do your part to keep the largest airline in the world running smoothly as we care for people on life’s journey? Feel free to be yourself at American.\r\n\r\nJob Level: 70\r\n\r\nRequisition ID: 62029",
// 					],
// 				},
// 			],
// 			related_links: [
// 				{
// 					link: 'http://www.aa.com/',
// 					text: 'aa.com',
// 				},
// 				{
// 					link: 'https://www.google.com/search?ucbcb=1&q=American+Airlines&sa=X&ved=0ahUKEwikncn75cD9AhX3cWwGHZMYC9gQmJACCJgK',
// 					text: 'See web results for American Airlines',
// 				},
// 			],
// 			extensions: ['9 days ago', 'Full-time', 'No degree mentioned'],
// 			detected_extensions: {
// 				posted_at: '9 days ago',
// 				schedule_type: 'Full-time',
// 			},
// 			job_id: 'eyJqb2JfdGl0bGUiOiJCYWdnYWdlIEFnZW50IFNlcnZpY2UsIFVuaXRlZCBLaW5nZG9tIC0gTEhSIiwiaHRpZG9jaWQiOiIzbEoxb1NxdUY1QUFBQUFBQUFBQUFBPT0iLCJmYyI6IkVxSUNDdUlCUVVOUWQycHFVVjlaUmpKc1RsaG9SamhVTW04ek1WbHhlVXBNVGxaeGFrVjBibnBXUzBNMWVVSklNVWsyY0ZOU1IwaDJZa3hKVTFveVIzUTRia2syTW1SRlgyZ3pTVUZUVkhVdFZHcFBVRmhHZERsSE5XOVFPQzFXYTFsbmVUTlRiMjFRYTNCd2VWSlRZVWwwVjFOZldrbExObFozYlMxS1UzSktjbFYxTldWMk1HODRiMUJLUzBWbWFsWTFhV2hFVG1rMWMzQmlkMEUzZWtOTlpTMTZka3hCVVhSak5HRnViMDFRYzNGNU4ycDZORFpTZW5sVlZHVnpOemxPVEhrNFQzSXRlV0p0YnpBeVdIcERUbWRyUVd0SlFWOHdiVzAzTm5veGFFeExRV0YyUVJJWFFUTk5RMXBQVTFCQ1gyWnFjMlZOVUdzM1IzTjNRVEFhSWtGR1h6Wk5RVTl0VEY5Zk1XaGFRVmwzZVhwSGVFOXBZMDU0TFZNM2VUUlVOVkUiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY181IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIEpvYnMgQXQgQW1lcmljYW4gQWlybGluZXMiLCJsaW5rIjoiaHR0cHM6Ly9qb2JzLmFhLmNvbS9qb2IvTG9uZG9uLUZsZWV0LVNlcnZpY2UtQ2xlcmslMkMtVW5pdGVkLUtpbmdkb20tTEhSLUhOUy85MTg2MTYzMDAvP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=',
// 		},
// 		{
// 			title: 'Drive/courier (weekends) | London',
// 			company_name: 'Uber',
// 			location: 'London, UK',
// 			via: 'via Uber',
// 			description:
// 				"Whether you're looking for part-time weekend jobs, Saturday jobs near you or Sunday jobs in London, consider making money flexibly with Uber instead. As an independent driver or courier, you're empowered to make money if and when you want, including on weekends.\nThis is a new line\nThis is another line\n- bullet point\n-another bullet point\n- another one",
// 			job_highlights: [
// 				{
// 					items: [],
// 				},
// 			],
// 			related_links: [
// 				{
// 					link: 'http://www.uber.com/',
// 					text: 'uber.com',
// 				},
// 				{
// 					link: 'https://www.google.com/search?ucbcb=1&q=Uber&sa=X&ved=0ahUKEwikncn75cD9AhX3cWwGHZMYC9gQmJACCMgK',
// 					text: 'See web results for Uber',
// 				},
// 			],
// 			thumbnail:
// 				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulSpJJlCOHnWVio6FyA8-WPlAOFmzzC8G6K47jKA&s',
// 			extensions: ['2 days ago', 'Part-time', 'No degree mentioned'],
// 			detected_extensions: {
// 				posted_at: '2 days ago',
// 				schedule_type: 'Part-time',
// 			},
// 			job_id: 'eyJqb2JfdGl0bGUiOiJEcml2ZS9jb3VyaWVyICh3ZWVrZW5kcykgfCBMb25kb24iLCJodGlkb2NpZCI6Ii14WUIxd01sNXdJQUFBQUFBQUFBQUE9PSIsImZjIjoiRW93Q0Nzd0JRVU5RZDJwcVUyVXdaelZyZWkxRFIwbEplWGQ1VkhFM2JITTRZMEpsVUc5dVJWOTFZazQxYTJOS1RWSjFlRkJvVWxaMGRUTlZZamRFU2s1elMwbGxibmRuV1dka1ZVMTBYMWRoWmtKSFJXVk9ibmswUjNGclQwUkxRMnRZVUMxMVZtZGpNMGhVYms0eGRYUm1XbVZIT1RKNVFXcHFWelJ4VFZneldYVkxWRk5qVm5sb1MxRXlaazE1U2s1ME4ySnVla2QzYlhvMWQyMVdZVXBHVlRsdlNFZDZXR05wTkVSbmQxTkdiRlJNZVZsaWFtSmtaVWRYUWxOcU9FcEhhRWh2YURNMVJURkthRXh4VGpkR0VoZEJNMDFEV2s5VFVFSmZabXB6WlUxUWF6ZEhjM2RCTUJvaVFVWmZOazFCVURGT1ptbzViVE41YzB4c05FRndXRzFNYTNkZk9HWjVUM1JSVVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY183IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IGRpcmVjdGx5IG9uIFViZXIiLCJsaW5rIjoiaHR0cHM6Ly93d3cudWJlci5jb20vZ2IvZW4vZS9kcml2ZS93ZWVrZW5kLWpvYnMvbG9uZG9uLWVuZy1nYi8/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==',
// 		},
// 		{
// 			title: 'Research Assistant',
// 			company_name: 'London School of Hygiene & Tropical Medicine',
// 			location: 'London, UK',
// 			via: 'via Job Vacancies On Jobs.ac.uk',
// 			description:
// 				"The London School of Hygiene & Tropical Medicine (LSHTM) is a world-leading centre for research and postgraduate education in public and global health. Our mission is to improve health and health equity in the UK and worldwide; working in partnership to achieve excellence in public and global health research, education and translation of knowledge into policy and practice. \r\n\r\n An exciting opportunity has arisen for an early career researcher to join a rapidly growing and world-renowned research team - the Environmental Health Group at LSHTM. We are looking for a full-time Research Assistant for a fixed-term post, with opportunity to extend subject to funding.\r\n\r\nThe post holder will be based at LSHTM but will work closely with international partners and will be expected to maintain effective collaborations with research teams. The post holder will support ongoing public health research projects focused on understanding the impact of water, sanitation, and hygiene services on child health... This will involve data management and statistical analysis.\r\n\r\nThe successful applicant will have qualifications in public health, epidemiology, or a related field and experience in managing and analysing large datasets (R or Stata). Prior experience of working in large interdisciplinary teams is desirable. Further particulars are included in the attached job description.\r\n\r\nThe post is full-time and fixed-term for 3 months. Salary is on the Academic Grade 5 scale in the range £36,438 - £41,829 per annum (inclusive of London Weighting). The salary will be on the Academic scale, Grade 5 scale in the range £36,438 - £41,829 per annum (inclusive of London Weighting). The post will be subject to the LSHTM terms and conditions of service. Annual leave entitlement is 30 working days per year, pro rata for part time staff. In addition to this there are discretionary “Wellbeing Days”. Membership of the Pension Scheme is available.\r\n\r\nApplications should be made online via our website, which can be accessed by clicking 'Apply' above. Online applications will be accepted by the automated system until 10pm GMT on the closing date. Any queries regarding the application process may be addressed to jobs@lshtm.ac.uk.\r\n\r\nThe supporting statement section should set out how your qualifications, experience and training meet each of the selection criteria. Please provide one or more paragraphs addressing each criterion. The supporting statement is an essential part of the selection process and thus a failure to provide this information will mean that the application will not be considered. An answer to any of the criteria such as 'Please see attached CV' will not be considered acceptable.\r\n\r\nPlease note that if you are shortlisted and are unable to attend on the interview date it may not be possible to offer you an alternative date.\r\n\r\nFurther details:\r\n\r\nJob Description\r\n\r\nEmail details to a friend\r\n\r\nThe London School of Hygiene & Tropical Medicine is committed to being an equal opportunities employer. We believe that when people feel respected and included, they can be more creative, successful, and happier at work. While we have more work to do, we are committed to building an inclusive workplace, a community that everyone feels a part of, which is safe, respectful, supportive and enables all to reach their full potential.\r\n\r\n£36,438 to £41,829 per annum, inclusive of London Weighting (Grade 5",
// 			job_highlights: [
// 				{
// 					items: [],
// 				},
// 			],
// 			related_links: [
// 				{
// 					link: 'https://www.lshtm.ac.uk/',
// 					text: 'lshtm.ac.uk',
// 				},
// 				{
// 					link: 'https://www.google.com/search?ucbcb=1&q=London+School+of+Hygiene+%26+Tropical+Medicine&sa=X&ved=0ahUKEwikncn75cD9AhX3cWwGHZMYC9gQmJACCNYM',
// 					text: 'See web results for London School of Hygiene & Tropical Medicine',
// 				},
// 			],
// 			thumbnail:
// 				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakFwA1CDS7WKv22nwgLt4AQ8oKr7yXMqjGCpy&s=0',
// 			extensions: ['4 days ago', '£36,438–£41,829 a year', 'Full-time'],
// 			detected_extensions: {
// 				posted_at: '4 days ago',
// 				schedule_type: 'Full-time',
// 			},
// 			job_id: 'eyJqb2JfdGl0bGUiOiJSZXNlYXJjaCBBc3Npc3RhbnQiLCJodGlkb2NpZCI6ImZTVXFtRzVwY3U0QUFBQUFBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVU5RZDJwcVZHRk5XbkJhWDFWWGQwbFZaSFpJWlhoYVMySkJUVTlUUW1OVFVWTmllVVUwVlVod04wSXpRekpoT1RscGVVTnBRazlMYXpoclNXbElNMkpzZDAxWlJFVXpWRTlHVUMxRVNHWnFTRUZtTlVWclRXc3lTSFZPV0VaaVZVUTJYMGt3ZGs0MFlrNXBXbTVRUTNOU0xXOURlbU5DTWpJME5TMU9kSE16UzFSTWVrbEVTRWhFYzAxelNuQldOVFZuU21kRVRUTlhSblZCYjFOcFRGRjRValJGTW1Nd2VFMURUMnR4TjNCbE5IWlJOMWQzVnprd1dsQm5hV1l6WDFkT01uVlhhbEpITFVkd2MxTllXRmxaZGxwQmVXSlNhMHN3Y0RKTVUzTjVVUklYUVROTlExcFBVMUJDWDJacWMyVk5VR3MzUjNOM1FUQWFJa0ZHWHpaTlFWQlVTa1Y0V1ZCaGIwb3lkVGxyT1ZGS1dERnBNRlpLTkhkcFpWRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzE3IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIEpvYiBWYWNhbmNpZXMgT24gSm9icy5hYy51ayIsImxpbmsiOiJodHRwczovL3d3dy5qb2JzLmFjLnVrL2pvYi9DWFU5MDUvcmVzZWFyY2gtYXNzaXN0YW50P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=',
// 		},
// 	],
// };

let city;

const getPosition = async () => {
	if (navigator.geolocation) {
		// get location of user
		navigator.geolocation.getCurrentPosition(async position => {
			const lon = position.coords.longitude;
			const lat = position.coords.latitude;
			const res = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`,
			);
			const json = await res.json();

			// get city closest to user
			let rtn;
			if (json.features[0].properties.address.city)
				rtn = json.features[0].properties.address.city;
			else if (json.features[0].properties.address.town)
				rtn = json.features[0].properties.address.town;
			else if (json.features[0].properties.address.county)
				rtn = json.features[0].properties.address.county;
			else if (json.features[0].properties.address.state)
				rtn = json.features[0].properties.address.state;
			else rtn = '';
			console.log('city:', rtn);
			city = rtn;
			// return rtn;
		});
	}
	return null;
};

getPosition();

let data;
let loaded = false;

const getIntial = async () => {
	console.log('waiting...');
	while (typeof city === 'undefined')
		await new Promise(resolve => setTimeout(resolve, 1000));
	// const res = await fetch();
	// const json = await res.json();
	// data = json;
	// loaded = true
	// console.log(json);
	// return json;
};

getIntial();

const root = createRoot(document.getElementById('root'));
root.render(<App data={data} loaded={loaded} />);

console.log('width:', window.innerWidth);

// get current location of user to find closest city //
// use closest city to find all jobs in that city (jobs in [City])
// set intial data to city to render all jobs

// -- check whether description paragraphing works

// add search value to job query (can include location in query)
// add location info from sidebar into job query
// 	- search bar overides any radio clicked
//  - radio value added to query
// add full time toggle to job query
