import { ProjectData } from "../props";

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Modern Serenity',
    category: 'RESIDENTIAL · LIVING ROOM',
    imageUrl: '/cocora_7.jpeg',
    description: 'A contemporary living room designed for comfort and style, featuring minimalist furniture and a calming color palette.',
    details: {
      year: '2022',
      area: '45 m²',
      location: 'New York, USA',
    },
    images: [
      '/cocora_7.jpeg',
      '/cocora_1.jpeg',
      '/cocora_2.jpeg',
      '/cocora_3.jpeg',
      '/cocora_4.jpeg',
      '/cocora_5.jpeg',
      '/cocora_6.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Tranquil Haven',
    category: 'RESIDENTIAL · BEDROOM',
    imageUrl: '/vive_1.jpeg',
    description: 'A peaceful bedroom retreat that combines soft textures and natural light to create a restful environment.',
    details: {
      year: '2023',
      area: '30 m²',
      location: 'Los Angeles, USA',
    },
    images: [
      '/vive_1.jpeg',
      '/vive_5.jpeg',
      '/vive_3.jpeg',
      '/vive_cafe_1.jpeg',
      '/vive_4.jpeg',
      '/vive_6.jpeg',
    ],
  },
  {
    id: 3,
    title: 'Culinary Elegance',
    category: 'RESIDENTIAL · KITCHEN',
    imageUrl: '/parque_1.jpeg',
    description: 'A stylish kitchen that blends functionality with elegance, featuring modern appliances and sleek cabinetry.',
    details: {
      year: '2021',
      area: '25 m²',
      location: 'Chicago, USA',
    },
    images: [
      '/parque_1.jpeg',
      '/parque_2.jpeg',
      '/parque_3.jpeg',
      '/parque_4.jpeg',
      '/parque_5.jpeg',
      '/parque_6.jpeg',
      '/parque_7.jpeg',
      '/parque_8.jpeg',
      '/parque_9.jpeg',
      '/parque_10.jpeg',
    ],
  },
];
