const employees = [
  {
    name: 'Ariana Gverzdys',
    title: 'Occupational Therapist, OTR, Reg. OT (BC)',
    priority_role: true,
    image_path: 'ariana-gverzdys.jpg',
    linkedIn: 'https://www.linkedin.com/in/ariana-gverzdys-8998a63b/',
    bio: `Ariana is an occupational therapist registered in both Canada and the
      United States, with current provincial licensing in British Columbia.
      After receiving her Master’s Degree in Occupational Therapy at the University of
      Western Ontario in 2016, she moved to Vancouver for a career opportunity in
      helping those in the community. After 5 years, she has ventured off on her own
      path and proudly founded Ariana’s Occupational Therapy Services, or simply,
      AOT Services.`,
    certifications: [
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
      'Occupational Therapy&#39;s Role in the Management of Neck Pain',
      'Recommendations For Preventing And Managing Mechanical Low Back Pain With Occupational Therapy Clients',
      'Suicide Awareness, Assessment and Intervention for Allied Health Professionals',
      'Suicide and Self-Harm in the Elderly',
      'A Mindful Approach to Persistent Pain Management in Home Health',
      'Non-Violent Crisis Intervention',
      'Wheelchair Assessment and Prescription Workshop',
    ],
    achivements: [
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
  },
];

module.exports = {
  employees,
}