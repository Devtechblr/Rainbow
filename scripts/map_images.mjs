import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/images/school');

const mappings = {
  '02_Logo_20.svg': 'ria-crest.svg',
  '16_Rainbow-Innovative-Academy_20logo_20.svg': 'ria-official-logo.svg',
  '19_Ria_school1.jpeg': 'campus-building-main.jpg',
  '20_Ria_school2.jpeg': 'campus-building-exterior.jpg',
  '17_RIA_hero.webp': 'hero-campus-banner.webp',
  '18_RIA_hero2.webp': 'hero-students-learning.webp',
  '04_RAI_hero1.webp': 'hero-interactive-smartclass.webp',
  '14_varalakshmi.jpeg': 'founder-varalakshmi.jpg',
  '15_manjunatha.webp': 'principal-manjunatha.webp',
  '05_kindergarten.webp': 'kindergarten-play.webp',
  '21_kindergarten-classroom.webp': 'kindergarten-classroom.webp',
  '22_lkg-class.webp': 'lkg-classroom.webp',
  '23_ukg-class.webp': 'ukg-classroom.webp',
  '06_primary.webp': 'primary-education.webp',
  '24_primary-classroom.webp': 'primary-classroom.webp',
  '25_primary-sports.webp': 'primary-sports-track.webp',
  '26_primary-cultural.webp': 'primary-cultural-arts.webp',
  '27_primary-library.webp': 'primary-library-reading.webp',
  '28_primary-science.webp': 'primary-science-experiment.webp',
  '29_primary-art.webp': 'primary-art-creative.webp',
  '30_primary-debate.webp': 'primary-debate-speaking.webp',
  '07_HighSchool.webp': 'highschool-main.webp',
  '31_highschool-classroom.webp': 'highschool-classroom.webp',
  '32_highschool-lab.webp': 'highschool-science-lab.webp',
  '33_highschool-study.webp': 'highschool-study-group.webp',
  '34_highschool-exam.webp': 'highschool-examination.webp',
  '08_athletic.JPG': 'sports-athletics-field.jpg',
  '09_arts.webp': 'cultural-dance-music.webp',
  '10_science.webp': 'stem-science-curriculum.webp',
  '13_technology.JPG': 'computer-technology-lab.jpg',
  '11_public.webp': 'student-assembly-presentation.webp',
  '12_community.webp': 'community-service-initiative.webp',
  '35_facility-1.webp': 'facility-digital-classroom.webp',
  '36_facility-2.webp': 'facility-advanced-labs.webp',
  '37_facility-3.webp': 'facility-library-hub.webp',
  '38_facility-4.webp': 'facility-sports-grounds.webp',
  '39_facility-5.webp': 'facility-gps-transport.webp',
  '40_facility-6.webp': 'facility-lush-campus.webp'
};

for (const [src, dest] of Object.entries(mappings)) {
  const srcPath = path.join(dir, src);
  const destPath = path.join(dir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`Source missing: ${src}`);
  }
}

console.log('Semantic image mapping completed.');

