import { DocumentItem } from './types';
import React from 'react';

export const USER_INFO = {
  name: "Spencer Mida",
  topic: "Dermatology",
  school: "Memorial High School",
  email: "spencer.mida.266@k12.friscoisd.org",
  quote: "“Despite knowing the journey and where it leads, I embrace it. And I welcome every moment of it.”",
  quoteAuthor: "Dr. Louise Banks, Arrival (2016)"
};

export const MISSION_STATEMENT = "I will expand my knowledge in the field of dermatology through hands-on clinical observation, mentor guidance, and rigorous research. My goal is to develop practical skills in patient communication, basic dermatologic assessment, and preventative skin care while completing the Independent Study & Mentorship program.";

export const BIO_PARAGRAPHS = [
  "I am a Junior at Memorial High School (Class of 2027) with a dedicated focus on the medical sciences. My academic journey is defined by a rigorous pursuit of knowledge in high-level science and health classes. Currently, I am deepening this focus through the Independent Study & Mentorship (ISM) program, specializing in Dermatology.",
  "Beyond academics, I am a proactive leader and team player. I serve as President of the Green Club at my previous school, where I organized community clean-up events and sustainable projects. I also served as Sound Master for theatre productions at my previous school, managing complex audio operations for live performances. My professional experiences in the service industry have honed my interpersonal skills, teaching me the value of efficiency, customer interaction, and reliability in fast-paced environments.",
  "I am CPR-Certified and technologically adept, driven by a curiosity to understand the biological complexities of the skin and a desire to provide compassionate patient care."
];

export const ISM_DESCRIPTION = `Independent Study and Mentorship (ISM) is an exciting, rigorous elective offered at Frisco ISD high schools, designed for high-achieving juniors or seniors. The course includes research analysis, original idea generation, product design, and hands-on experiences in a professional environment. This course encourages students to develop skills in the following areas: Professionalism, Communication/Networking, Interpersonal/Interviewing, Skills, Public Speaking, and Personal Branding.`;

// Full text content for the documents based on provided OCR
const RESUME_CONTENT = (
  <div className="space-y-6 text-slate-300 font-light">
    <div className="border-b border-slate-700 pb-4">
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Objective</h3>
      <p>To expand my knowledge in the field of dermatology through hands-on clinical observation, mentor guidance, and research. I aim to develop practical skills in patient communication, basic dermatologic assessment, and preventative skin care while completing the Independent Study & Mentorship program at Memorial High School as preparation for future medical training.</p>
    </div>
    
    <div className="border-b border-slate-700 pb-4">
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Education</h3>
      <div className="mb-2">
        <h4 className="font-bold text-white">Memorial High School — Frisco, TX</h4>
        <p className="text-sm text-cyan-400">Junior (Class of 2027)</p>
      </div>
      <p><span className="font-semibold text-slate-200">Relevant Coursework:</span> Principles of Health Sciences, Honors Chemistry, Honors Biology, Independent Study & Mentorship (ISM): Dermatology</p>
    </div>

    <div className="border-b border-slate-700 pb-4">
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Experience</h3>
      <div className="mb-4">
        <h4 className="font-bold text-white">Sound Master — Previous School</h4>
        <p className="italic text-sm mb-1">LCA Spring Play "CLUE" (Apr 2024) & Spring Musical "The Little Mermaid" (Apr 2025)</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Coordinated SFX and audio operations for rehearsals and live performances; maintained equipment and ran live sound cues.</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white">Service Industry — Cashier / Hospitality / Sacker</h4>
        <p className="italic text-sm mb-1">(May 2022 – Aug 2025)</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Customer Service, point-of-sale operations, and team collaboration.</li>
          <li>Bagging/stocking, customer interaction, efficient checkout support.</li>
        </ul>
      </div>
    </div>

    <div className="border-b border-slate-700 pb-4">
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Leadership & Extracurriculars</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><span className="font-bold text-slate-200">President, Green Club (2024–2025)</span> — Organized and led multiple community clean-up events (8+), coordinated volunteer shifts, and oversaw garden box projects (design, build, varnish).</li>
        <li><span className="font-bold text-slate-200">Theatre / Sound Crew</span> — Sound Master for school productions (managing SFX and live cues).</li>
        <li><span className="font-bold text-slate-200">Clubs:</span> ITS, NHS (member since Spring 2025), Spanish Club, NSHS (all in process of being transferred to Memorial), Lead Legacy (communications/social media, freshman to sophomore year at Legacy).</li>
        <li><span className="font-bold text-slate-200">Summer Discovery — UT Austin (June 15–28)</span> — two-week college program focused on Organizational Behavior & Leadership (Professor: Tanaya Pange). Certificate available.</li>
      </ul>
    </div>

    <div className="border-b border-slate-700 pb-4">
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Volunteer & Service</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Multiple Feed My Starving Children packing sessions (several 2-hour shifts).</li>
        <li>Organized and led Green Club clean-ups at local parks (Beavers Bend, Pearson Acres, Frisco Commons, Warren Sports Complex).</li>
        <li>Built and varnished a community garden box for LCA; participated in Miracle League and other community food/aid events.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Skills and Awards</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Organization · Relationship Building · Team Player · Diligent · Technologically Adept · Collaborative · Creative</li>
        <li>CPR-Certified</li>
        <li>Event coordination, basic audio/sound operations, volunteer leadership, customer service, basic clinical observation skills (ISM).</li>
        <li>Freshman World Language Award (April 29, 2023)</li>
      </ul>
    </div>
  </div>
);

export const DOCUMENTS: DocumentItem[] = [
  {
    id: 'resume',
    title: 'Professional Resume',
    date: '2025',
    summary: 'A comprehensive overview of my education, leadership experience, service industry work, and skills.',
    type: 'Resume',
    fullContent: RESUME_CONTENT
  },
  {
    id: 'res-1',
    title: 'Research Assessment #1: The Skin Microbiome',
    date: 'September 9, 2025',
    summary: 'An analysis of how the skin functions as a complex ecosystem of microorganisms, challenging the traditional germ theory and highlighting the importance of microbial balance for skin health.',
    type: 'Assessment',
    fileName: 'Research_Assessment_1.pdf',
    fullContent: `MLA Citation: Grice, Elizabeth A, and Julia A Segre. “The Skin Microbiome.” Nature Reviews. Microbiology, U.S. National Library of Medicine, Apr. 2011, pmc.ncbi.nlm.nih.gov/articles/PMC3535073/.

Analysis:
After reading “The skin microbiome,” I learned that the human skin is not just a simple barrier but a complex living ecosystem. I now know this ecosystem is made up of diverse communities of microorganisms, including bacteria and fungi, that change depending on the specific location on the skin. This microbiome is essential to our health because it works with our body’s immune system to help protect us from disease-causing microbes. The most important thing I learned was that an imbalance in these microbial communities is now strongly linked to the development of chronic skin diseases like atopic dermatitis, acne, and psoriasis.

This research has caused a major shift in how I think about dermatology. Before this, my understanding was based on the simple idea that skin should be sterile and that most bacteria that were "germs" needed to be removed. This article changed that view, kind of making me realize the more complex reality that my skin is a habitat for trillions of beneficial organisms. Realizing that my body is in a constant partnership with these microbes has changed my perspective. My understanding has now moved beyond a basic germ theory to a more complex ecological place, where skin health is maintained by a balanced and diverse community of microorganisms.

This new perspective makes me re-evaluate many common skincare habits and ask how this changes skincare advice in general. I now see the potential for harm in the widespread use of harsh antibacterial soaps and cleansers. The article’s point that helpful bacteria like Staphylococcus epidermidis can produce their own antimicrobials to fight off pathogens like Staphylococcus aureus was very insightful. This makes me care about the topic because it suggests our focus on being overly clean might be weakening our skin's natural defenses. By removing these helpful microbes, we could be making ourselves more vulnerable to the very skin problems we are trying to avoid.

I am also very interested in the potential for new treatments that this research suggests. The idea of a "microbiome-focused" approach to dermatology is exciting because it points toward a future of more effective, personalized skincare. I agree that we need to move beyond less targeted methods like broad-spectrum antibiotics, which can disrupt the entire microbiome. The possibility of using probiotics (beneficial bacteria) or prebiotics to restore a healthy balance on the skin seems like a much smarter way to manage chronic conditions. This approach focuses on cultivating a healthy ecosystem rather than just treating symptoms.`
  },
  {
    id: 'res-2',
    title: 'Research Assessment #2: Cutaneous Wound Healing',
    date: 'September 18, 2025',
    summary: 'A deep dive into the biological phases of wound healing (inflammation, tissue formation, remodeling), contrasting adult healing with scarless fetal healing and exploring modern regenerative treatments.',
    type: 'Assessment',
    fileName: 'Research_Assessment_2.pdf',
    fullContent: `MLA Citation: Singer, Adam J, and Richard A.F. Clark. “Cutaneous Wound Healing | New England Journal of Medicine.” The New England Journal of Medicine, www.nejm.org/doi/full/10.1056/NEJM199909023411006. Accessed 23 Sept. 2025.

Analysis:
From this article, I learned that healing a wound is a complex biological process with distinct stages. The article covers the entire journey, from how healing is supposed to work to the problems that can occur in abnormal wound healing. It also talks about modern medical interventions that can help, like using growth factors and skin substitutes to improve outcomes. I found it pretty interesting that the article pulls insights from fetal wound healing, which I interpreted as saying we can learn from how babies heal before birth.

This article has really changed how I see wound healing. Before, I just thought of it as a cut scabbing over and eventually fading away. I never considered it an active, organized process. The fact that there's a whole "Biology of Wound Healing" makes me realize it's a series of planned events, kinda like a construction project inside the body, if you will. This affects my understanding of dermatology by showing me that even the most basic function of the skin is incredibly complex and requires a perfect sequence of events to work correctly.

The part that made me wonder why this matters in the first place was the section on Insights from Fetal Wound Healing. I had no idea that fetuses could heal without scarring! I think this is a huge deal because it essentially implies that scar formation isn't a necessary part of healing, but it's just how adult bodies do it. I think the clinical implication here is powerful in that if scientists can figure out what’s different about the fetal healing process, maybe they could develop treatments that allow adults to heal from surgery or injuries without leaving permanent scars. I think that would completely change many aspects of medicine!

Reading about Abnormal Wound Healing made a direct connection for me to the sections on modern treatments. It makes sense that we would need things like Clinical Experience with Growth Factors and Skin Substitutes for situations where the body’s natural process fails. This kinda made me wonder, how often does normal healing fail, and why? I am also now curious about what skin substitutes are actually made from and how they are integrated into a person's body.`
  },
  {
    id: 'res-3',
    title: 'Research Assessment #3: Reflection Over Symposium',
    date: 'September 24, 2025',
    summary: 'A reflection on professional etiquette, communication skills, and business insights gained from the Business Symposium, particularly the entrepreneurial journey of Jeff Chaponick.',
    type: 'Assessment',
    fileName: 'Research_Assessment_3.pdf',
    fullContent: `Reflection Over Symposium:

To prepare for the business symposium, I practiced my public speaking both alone and with my parents, who helped me track my use of filler words. I felt prepared but slightly under pressure; in the future, I would practice even more to reduce filler words, as good phrasing is a key part of one's professional appearance.

The most valuable advice was that strong communication and interpersonal skills are essential for any career. This is directly applicable to my interest in dermatology, where I will need to have clear and effective conversations with both patients and other doctors.

Jeff Chaponick, the CEO of MAC Executive Recruiters, made the biggest impression on me. His story of starting a company in his teens in high school, selling it in his 30s for around $40 million, and achieving great success without a college degree was inspiring. It showed me that you are responsible for your own success by using your unique talents.

I learned several specific things about professional etiquette, such as the importance of using professional titles in emails, replying quickly, and understanding that follow-up emails are critical. I also learned that while you should get to know your mentor personally, it's vital to keep the relationship professional.

The symposium expanded my understanding of dermatology by highlighting how important it is to learn the specific research and terminology of your field. It made me realize that a successful career isn't just about practice but also about contributing your own original work based on that research.

If I could ask a follow-up question, I would ask Jeff Chaponick about the specific process he used to start his company in his 20s and what key strategies he used to grow it so successfully. I am very interested in learning the details of his entrepreneurial path, even if it’s not a dermatology practice!

My advice for other students would be to practice and develop their interpersonal skills, as they are key to success. Students should get comfortable with public speaking, making eye contact, and using confident nonverbal communication, as your physical and online presence reflects your character.`
  },
  {
    id: 'res-4',
    title: 'Research Assessment #4: Skin of Color',
    date: 'October 21, 2025',
    summary: 'A critical review of how dermatological conditions present differently in skin of color, highlighting healthcare disparities, misdiagnosis rates, and the importance of inclusive medical education.',
    type: 'Assessment',
    fileName: 'Research_Assessment_4.pdf',
    fullContent: `MLA Citation: Hutchison, Eliza et al. “Skin of colour: essentials for the non-dermatologist.” Clinical medicine (London, England) vol. 23,1 (2023): 2-8. doi:10.7861/clinmed.2022-0335

Analysis:
In this article, I learned how dermatological conditions present differently in patients with skin of colour (SOC). I see it says that many doctors-in-training do not receive adequate education on this topic, which can lead to a lack of confidence and misdiagnosis. A main idea I also saw is that inflammation, which I typically associate with redness or "erythema," is often masked in darker skin tones and may instead appear as brown, grey, or purple discolouration. The review covers nine specific conditions, highlighting how their presentation, and sometimes their prevalence, differs significantly in SOC.

My first reaction to this article is honestly concern, especially regarding the statistics on misdiagnosis. The questionnaire mentioned found that 100% of internal medicine trainees misdiagnosed eczema and 60% misdiagnosed melanoma in SOC images. This seems really high and honestly frightening. It makes me ask, if doctors are not being trained to recognize conditions in all skin types, how can they possibly provide equal and effective care? This feels like a major gap in medical education. I care about this because it's a clear issue of health equity. It essentially is saying that a patient's outcome could be worse simply because their skin pigmentation doesn't match the examples used in most teaching resources.

The section on skin cancer was the most surprising to me. I, like many people, have been taught that skin cancer is primarily a risk for people with fair skin and high sun exposure. This article changed that idea a little. The fact that skin cancer has a higher mortality rate in patients with SOC is a shocking statistic, and it's attributed directly to delays in detection and diagnosis. I had no idea that in Black and Asian-Indian patients, melanoma (the deadliest form) is most likely to appear in non-sun-exposed areas like the palms, soles, or under the nails. This makes me realize how dangerous common misconceptions about "immunity" to skin cancer can be for people of colour.

This new information also changes how I think about very common conditions. For example, the article states that atopic dermatitis (eczema) is actually more common in Black and Asian-Indian patients than in White patients. I also learned it can look very different, sometimes affecting the extensor surfaces (like the outside of the elbows) instead of the flexures (the inside), or appearing as small bumps around hair follicles. Do I agree with the article's conclusion? Yes, it seems obvious that this is a problem. It shows me that the consequences of misdiagnosis are not just about the primary condition, but also about the long-term secondary issues like post-inflammatory hyperpigmentation and keloidal scarring, which the article also says can be more distressing to the patient than the original disease.`
  },
  {
    id: 'res-5',
    title: 'Research Assessment #5: AI in Dermatology',
    date: 'December 1, 2025',
    summary: 'An investigation into the application of Convolutional Neural Networks (CNNs) in diagnosing skin lesions, weighing the benefits of AI efficiency against the ethical need for clinician oversight.',
    type: 'Assessment',
    fileName: 'Research_Assessment_5.pdf',
    fullContent: `MLA Citation: X. Du‐Harpur, F.M. Watt, N.M. Luscombe, M.D. Lynch, What is AI? Applications of artificial intelligence to dermatology, British Journal of Dermatology, Volume 183, Issue 3, 1 September 2020, Pages 423–430, https://doi.org/10.1111/bjd.18880

Analysis:
I learned that this article is a really good review of how artificial intelligence (AI), specifically deep learning, is currently being applied to the field of dermatology to diagnose skin cancer. The authors explain that computer scientists use Convolutional Neural Networks (CNNs) to analyze pixels in images of skin lesions, allowing the computer to identify patterns that might indicate disease. I found it important that in multiple studies, these AI algorithms actually performed better, showing higher sensitivity and specificity, than human dermatologists when classifying images as benign or malignant! However, I saw that the article ends with that these tools are not ready to replace doctors but should instead be used as "decision aids" to help clinicians triage patients more effectively.

Reading about the AI outperforming the doctors made me ask if this meant dermatologists will become obsolete. The charts showed the AI sitting higher on the ROC curve than the average dermatologist, meaning they were more accurate in that specific test. However, I learned that this comparison might not be fully fair! The article said that the AI was only looking at cropped images, whereas a real doctor looks at the whole patient, considers their history, and examines other spots on their body. This changes my understanding of the subject because it shows to me that while the technology is really cool, it is functioning in a "closed loop" that doesn't fully represent the messy reality of a clinical exam.

I also struggled with the concept of the black box problem mentioned. I learned that even the creators of these neural networks cannot fully explain how the computer makes its decision or which features it is looking at. This made me wonder, "How can we trust a diagnosis if we can't explain the logic behind it to a patient?" If an AI makes a mistake, who is responsible, the doctor or the programmer? I agree with the authors that until we can kinda guarantee explainability, these tools should only guide decisions rather than make them, as legal liability still rests with the clinician! This is a major hurdle that I hadn't considered before, shifting my focus from just the medical technology to the ethical stuff.`
  },
  {
    id: 'int-1',
    title: 'Interview: Dr. Arturo Dominguez',
    date: 'October 31, 2025',
    summary: 'Discussing inpatient dermatology, complex autoimmune blistering diseases, and the nonlinear path from internal medicine to specialized dermatology care.',
    type: 'Interview',
    fileName: 'Interview_Dr_Dominguez.pdf',
    fullContent: `Summary of My Interview:
For my Independent Study & Mentorship (ISM) project on dermatology, I had the privilege of interviewing Dr. Arturo Dominguez, a dermatologist at UT Southwestern. Going into this interview, I was mostly familiar with the common, outpatient side of dermatology. My conversation with Dr. Dominguez completely opened my eyes to a much more complex and critical side of the field, particularly his work in inpatient dermatology.

What I Learned:
The most significant thing I learned was that the path to a medical specialty isn't always a straight line. Dr. Dominguez shared that he was initially interested in internal medicine and even matched into an internal medicine residency first. It was only after completing that residency that he reapplied and was accepted into a second residency for dermatology. His background in internal medicine directly shaped his career, giving him a unique perspective on how skin diseases are often manifestations of internal disease.

This dual expertise inspired him to found the inpatient dermatology consult service at UT Southwestern's affiliated hospitals, which is a specialized field I didn't even know existed. He explained that his team consults on complex cases, often helping cancer patients manage severe skin side effects from immunotherapy, with the goal of keeping them on their life-saving treatments.

Challenging My Perceptions:
My biggest perception change was about teledermatology. When I thought of teledermatology, I pictured a patient having a video call with a doctor about acne. Dr. Dominguez explained a system I had no idea about "store-and-forward" doctor-to-doctor consultations. He described how a primary care physician can take high-resolution photos of a patient's condition, send them to his team, and get expert recommendations, often getting the patient care much sooner. This seems like a much more efficient and impactful use of the technology than what I had imagined.

How I Will Use This Information:
The advice Dr. Dominguez gave me for high school was simple but very helpful. He said to "not hyperfocus" on one specific thing too early and to instead "be broad". He encouraged me to get the skills I need to thrive and focus on my class requirements without getting overwhelmed or burning out. I will use this advice to focus on building a strong foundation in all my science classes, not just biology, and to remember that my career path might have twists and turns like his did.`
  },
  {
    id: 'int-2',
    title: 'Interview: Dr. Stephanie Savory',
    date: 'November 12, 2025',
    summary: 'Insights into melanoma detection, the limitations of AI in practice, and the importance of clinical volunteering. Discussed "ABCDE" rules and challenges in diverse skin types.',
    type: 'Interview',
    fileName: 'Interview_Dr_Savory.pdf',
    fullContent: `Summary of My Interview:
For my ISM research, I interviewed Dr. Stephanie Savory, a dermatologist at UT Southwestern who specializes in melanoma and pigmented lesions. I was really interested to learn what she enjoys most about her job, which she said includes helping patients feel better from symptomatic conditions like severe itching, as well as the challenge of finding skin cancer, which she described as finding the missing puzzle piece.

What I Learned:
I learned a lot about the realities of melanoma detection. Dr. Savory explained that the well-known "ABCDE" rule for moles is a good start for patients, but it's not perfect. It often misses amelanotic melanomas, which are pink or skin-colored, and small-diameter melanomas, which patients don't expect.

One of the biggest challenges in detection is simply getting certain groups of people, especially older men, to come in for screenings. Another major challenge is that some practitioners mistakenly believe melanoma doesn't happen in darker skin types. Dr. Savory pointed out that acral melanoma (on hands, feet, and nails) is actually more common in darker skin types and is often diagnosed later, which makes it more dangerous.

Insight That Challenged My Perception:
My biggest perception change was about technology. I asked about an AI system called Photofinder, assuming it was a futuristic-ish tool that made detection easy. Dr. Savory kinda challenged this, explaining that while the AI is helpful, it shouldn't be relied on. She said it's currently best in a supportive role because it's not always accurate and often picks up noise like freckles or even hair follicles. I learned that the experienced doctor's eye is still the most important factor.

I was also surprised to learn she was an English Lit major in college. This changed my perception that you must only study science. She said it helped her with critical thinking and persuasive writing, a skill she now uses to write convincing prior authorizations to get medications approved for her patients.

How I Will Use This Information:
Dr. Savory gave some of the most helpful, practical advice I've received. She stressed that the most important question for me right now is not which specialty I want, but if I want to be in medicine at all. To figure that out, she advised:
• Try shadowing, though she noted it's difficult now because of HIPAA.
• Seek out high school STEM programs.
• Volunteer in a medical setting.`
  },
  {
    id: 'int-3',
    title: 'Interview: Dr. Kevin Kia',
    date: 'November 15, 2025',
    summary: 'A conversation about priority management, the business realities of running a clinic, and the importance of staying open-minded regarding medical specialties.',
    type: 'Interview',
    fileName: 'Interview_Dr_Kia.pdf',
    fullContent: `Summary:
Going into my interview with Dr. Kevin Kia, I was prepared to learn about skin conditions and medical school rigor, but I ended up learning just as much about life priorities and the business realities of medicine. Dr. Kia’s background is really unique, in that before medical school, he actually attended culinary school in Lyon, France! He explained that because his parents didn't view cooking as a professional career, he finished his undergraduate degree in three years to buy time to pursue his passion for food before returning to the medical path. This foreshadowed a key theme of our conversation: priority management.

One of the most helpful pieces of advice Dr. Kia offered was his perspective on time management. When I asked how he balances research, teaching, private practice, and family, he used an analogy that stuck with me: if you are driving and your tire blows out, you find time to fix it because it is an immediate priority. He argued that we have time for anything if we make it a priority, telling me, “You just make it a priority. And you figure it out.” This challenged my perception that busy professionals are victims of their schedules; instead, he views time as something he actively commands.

Dr. Kia also provided insight that challenged my perception of what is difficult about being a doctor. I assumed the hardest parts were difficult patients or insurance paperwork. However, Dr. Kia revealed that the daily stressors are actually staffing issues and managing the people required to run a clinic.

Regarding my career path, Dr. Kia advised me to stay open-minded. He noted that the average medical student changes their mind about their specialty four times. He originally intended to go into reconstructive plastic surgery and only pivoted to dermatology in his fourth year of residency. He advised me to focus on whether I want a career in medicine and patient care broadly, rather than locking myself into dermatology too early.`
  }
];