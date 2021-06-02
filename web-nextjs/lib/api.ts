import { secrets } from './utils';

export const getStrapiURL = (path: string): string => {
  return `${secrets.CMS_URL}${path}`;
};

export interface Skill {
  id: number;
  name: string;
  logo: {
    url: string;
  };
}

interface SkillListItem {
  id: number;
  skill: Skill;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  image: Record<string, string>;
  slug: string;
  keywords: string;
  published_at: string;
  content: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  description_lg: string;
  images: Image[];
  slug: string;
  skills: Skill[];
  skill_list: SkillListItem[];
  isHobby: boolean;
  url?: string;
  github?: string;
}

// Helper to make GET requests to Strapi
export const fetchAPI = async (path: string): Promise<Project[]> => {
  const requestUrl = getStrapiURL(path);

  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log(error);

      const projects = [] as Project[];
      return projects;
    });

    const projects = [] as Project[];
    return projects;
};
