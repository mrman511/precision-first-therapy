const employees = [
  {
    name: 'Ariana Gverzdys',
    title: 'Occupational Therapist, OTR, Reg. OT (BC)',
    priority_role: true,
    image_path: 'ariana-gverzdys.jpg',
    linkedIn: 'https://www.linkedin.com/in/ariana-gverzdys-8998a63b/',
    bio: `Ariana is an occupational therapist registered in both Canada and the United States, 
      with current provincial licensing in British Columbia. After receiving her Master’s Degree in 
      Occupational Therapy at the University of Western Ontario in 2016, she moved to Vancouver for a 
      career opportunity in helping those in the community. After 5 years, she has ventured off on her 
      own path and proudly founded Precision First Therapy.
      Ariana has worked with individuals experiencing various health conditions including severe
      TBIs & concussions, bone fractures, spinal cord injuries, anxiety disorders such as OCD, and
      chronic pain. She actively liaises with a client’s treatment team to develop individualized
      care plan focused on stabilizing physical, cognitive, and/or mental health symptoms.
      Her goal is to develop a recovery plan, that includes evidence-based treatment, that will
      allow clients to get back to engaging in the activities that fulfil not only their day, but thier daily life.
      Ariana has participated in various workshops & seminars throughout the years aimed at
      increasing knowledge of evidence-based practices for occupational therapists. Please
      see the list of certifications below.`,
    certifications: [
      'Traumatic Brain Injury Master Class - Advanced Level',
      'Progressive Goal Attainment Program (PGAP) Certified',
      'Introductory Cognitive Behavioral Therapy Training with CAOT',
      'Cognitive Rehabilitation Training with CAOT',
      'Motivation Interviewing Workshop',
      'Suicide Attempt Follow-up, Education &amp; Research (S.A.F.E.R.) Workshop',
      '8-Week Mindful Based Stress Reduction Course',
      'Expanding Ergonomic Concepts Across Areas Of Occupation',
      'Cognition and Cancer',
      'Returning To Activity Following Concussion',
      'Sleep: The Unconscious ADL',
      'Coping: How OT Mental Health Training Applies Across the Age and Impairment Spectrum',
      'Yoga Supports for Addiction Recovery',
      `Occupational Therapy's Role in the Management of Neck Pain`,
      'Recommendations For Preventing And Managing Mechanical Low Back Pain With Occupational Therapy Clients',
      'Suicide Awareness, Assessment and Intervention for Allied Health Professionals',
      'Suicide and Self-Harm in the Elderly',
      'A Mindful Approach to Persistent Pain Management in Home Health',
      'Non-Violent Crisis Intervention',
      'Wheelchair Assessment and Prescription Workshop',
    ],
    achievements: [
      {
        title: 'Achievement of the National Board for Certification in Occupational Therapy',
        subtitle: 'Current registration as an occupational therapist (OTR) in the United States'
      },
      {
        title: 'Achievement of National Occupational Therapy Certification Examination',
        subtitle: 'Current registration as an occupational therapist in Canada'
      },
    ],
    education: [
      {
        faculty: "School of Occupational Therapy",
        school: "University of Western Ontario",
        city: "London",
        province: "Ontario",
        degree_title: "Master of Science in Occupational Therapy",
        designation: 'MScOT',
        grad_year: 2016,
      },
      {
        faculty: undefined,
        school: "University of Guelph",
        city: "Guelph",
        province: "Ontario",
        degree_title: "Honors Bachelor of Science",
        designation: 'Bsc',
        grad_year: 2013,
      },
    ],
    badges: [{
        authority: "NBCOT",
        designation: "OTR",
        path: "NBCOT-otr.png"
      },
      // {
      //   authority: "NBCOT",
      //   designation: "Adult Rehabilitation",
      //   path: "NBCOT-adult-rehabilitation.png"
      // }
    ]
  },
];

module.exports = {
  employees,
}