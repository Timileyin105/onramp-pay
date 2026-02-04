import React from 'react';

const TermsOfUsePage: React.FC = () => {
      return (
            <div className="min-h-screen bg-slate-50 py-12 px-6">
                  <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center">
                                    Terms of Use
                              </h1>

                              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
                                    <h2 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Critical Information</h2>
                                    <p className="text-yellow-800 text-sm leading-relaxed">
                                          Onramp Pay delivers software solutions and API integration tools only. We do not function as a payment gateway, financial service provider, or money transmission business. Payment processing is exclusively managed by independent, licensed third-party organizations.
                                    </p>
                              </div>

                              <div className="prose prose-slate max-w-none space-y-8">
                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Definition of Terms</h2>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                                                <li><strong>"Platform"</strong> refers to onramp-pay.com, including all associated software, plugins, modules, and API services</li>
                                                <li><strong>"User Data"</strong> encompasses personal information such as names, email addresses, contact details, and business information</li>
                                                <li><strong>"Agreement"</strong> refers to these Terms of Use and all incorporated policies</li>
                                          </ul>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
                                          <p className="text-slate-700 leading-relaxed">
                                                By accessing our Platform, you enter into a binding legal agreement. Continued use signifies your complete acceptance of all provisions outlined herein. If you cannot accept these terms in their entirety, you must immediately cease using our Platform. These terms apply universally to all users, regardless of language proficiency or reading ability. Unauthorized access or use may constitute a violation of applicable laws and give rise to legal claims.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability Limitations</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                Onramp Pay, including all affiliated parties, management, staff, contractors, and service partners, disclaims liability for indirect, incidental, punitive, or consequential damages. This includes but is not limited to:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4">
                                                <li>Loss of revenue, data, business opportunities, or reputation</li>
                                                <li>Service interruptions or access denial</li>
                                                <li>Third-party actions or content accessed through our Platform</li>
                                                <li>Security breaches or unauthorized data access</li>
                                                <li>Technical failures or software incompatibilities</li>
                                          </ul>
                                          <p className="text-slate-700 leading-relaxed">
                                                All software and services are provided "as-is" without warranties of any kind. You assume full responsibility for evaluating suitability and compatibility with your requirements. Our maximum financial liability is limited to either the fees you've paid us within the preceding twelve months or $100 USD, whichever amount is greater.
                                          </p>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                All content, software code, documentation, trademarks, and design elements on the Platform remain the exclusive property of Onramp Pay and our licensors. Users may view and interact with materials for legitimate personal or business evaluation purposes only.
                                          </p>
                                          <p className="text-slate-700 leading-relaxed mb-4">
                                                Prohibited actions include:
                                          </p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>Commercial redistribution, resale, or licensing of our materials</li>
                                                <li>Reverse engineering, decompiling, or modifying our software</li>
                                                <li>Copying documentation or code for competitive purposes</li>
                                                <li>Removing proprietary notices or attributions from materials</li>
                                                <li>Public display or performance for commercial gain</li>
                                          </ul>
                                    </section>

                                    <section>
                                          <h2 className="text-2xl font-bold text-slate-900 mb-4">Prohibited Uses</h2>
                                          <p className="text-slate-700 leading-relaxed mb-4">The following activities are strictly forbidden:</p>
                                          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                                                <li>Utilizing our Platform for unlawful purposes or fraudulent activities</li>
                                                <li>Deploying automated systems to extract, harvest, or scrape Platform data</li>
                                                <li>Attempting to compromise security measures or access unauthorized areas</li>
                                                <li>Interfering with other users' access or Platform functionality</li>
                                                <li>Transmitting malicious code, viruses, or harmful software</li>
                                                <li>Impersonating Onramp Pay or misrepresenting your relationship with us</li>
                                          </ul>
                                    </section>
                              </div>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Our Platform operates without express or implied warranties of any nature. We make no guarantees regarding accuracy, completeness, reliability, or fitness for specific purposes. All content, features, and functionality are offered without assurance of uninterrupted operation or error-free performance. Users independently verify suitability and compatibility before implementation.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">User-Generated Content</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Content you submit, upload, or display grants Onramp Pay a worldwide, royalty-free license to utilize, reproduce, modify, and distribute such materials for Platform operation and service improvement. You retain ownership while confirming you possess necessary rights and permissions. Content must comply with applicable laws and respect third-party intellectual property. We reserve discretion to remove content violating these terms without prior notification.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Account Security</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Account holders must provide accurate, current registration information and maintain credential confidentiality. You accept full responsibility for all activities occurring under your account credentials. Immediately report suspected security breaches or unauthorized access. Account sharing or credential transfer is prohibited. We may suspend or terminate accounts exhibiting suspicious activity or policy violations.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification Obligation</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          You agree to defend, indemnify, and hold harmless Onramp Pay, its affiliates, partners, officers, and representatives from all claims, liabilities, damages, and legal expenses arising from your use of our Platform, violation of these Terms, or infringement of third-party rights.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Severability Clause</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Should any provision prove unenforceable or invalid under applicable law, such determination affects only that specific provision. All remaining terms continue in full force and effect. Invalid provisions shall be modified to the minimum extent necessary to achieve enforceability.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms Modification Rights</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          We reserve authority to modify, update, or replace these Terms at our discretion. Material changes will be communicated through Platform notifications or email. Continued use following modifications constitutes acceptance of revised Terms. Users should review Terms periodically to stay informed of updates.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Age Requirements</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Platform access requires users to be at least 18 years old or have reached the age of majority in their jurisdiction. Minors may not create accounts, purchase plugins, or use our services without verifiable parental or guardian consent.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Assignment of Rights</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Onramp Pay retains the right to assign, transfer, or delegate these Terms and associated obligations to third parties without user consent. Users may not transfer their rights or obligations without express written authorization from Onramp Pay.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Complete Agreement</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          These Terms, together with our Privacy Policy and any additional agreements you enter into with Onramp Pay, constitute the complete and exclusive understanding between parties. They supersede all prior oral or written communications, proposals, and understandings related to Platform usage.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Jurisdiction</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          These Terms operate under the laws of our operating jurisdiction, excluding conflict-of-law provisions. Users submit to the jurisdiction of courts in our registered location for dispute resolution. Non-enforcement of any provision does not constitute waiver of enforcement rights. All surviving provisions remain effective following termination.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Supplementary Agreements</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Specific Platform features or services may require acceptance of additional terms. Such supplementary agreements become binding upon your access to those particular services and operate in conjunction with these general Terms.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Termination</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          We maintain discretion to suspend, restrict, or terminate Platform access immediately without advance notification for policy violations or at our sole judgment. Account termination does not relieve users of obligations incurred prior to termination. Users may discontinue service voluntarily by ceasing Platform use and notifying us of account closure requests.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Resources</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Our Platform may reference or link to external websites, services, or resources beyond our control. We assume no responsibility for third-party content, availability, accuracy, or practices. Accessing external links occurs at your own discretion and risk. Review applicable third-party terms before engaging with external services.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms Updates</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          We periodically update these Terms to reflect service enhancements, legal requirements, or operational changes. Modifications become effective upon publication to this page. Users bear responsibility for reviewing Terms regularly. Continued Platform use following updates signifies acceptance of revised Terms.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Collection Technology</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Our Platform employs cookies and similar tracking technologies to enhance functionality and user experience. Comprehensive information regarding data collection practices appears in our Privacy Policy.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          If you have any questions about these terms or you think there is a mistake here, contact us via different methods listed on "Contact Us" page.
                                    </p>
                              </section>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                              <p className="text-sm text-slate-500">
                                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                        </div>
                  </div>
            </div>

      );
};
export default TermsOfUsePage;
