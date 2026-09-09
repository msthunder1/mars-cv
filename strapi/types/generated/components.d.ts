import type { Schema, Struct } from '@strapi/strapi';

export interface CvPartsContact extends Struct.ComponentSchema {
  collectionName: 'components_cv_parts_contacts';
  info: {
    displayName: 'contact';
    icon: 'information';
  };
  attributes: {
    email: Schema.Attribute.Email;
    links: Schema.Attribute.JSON;
  };
}

export interface CvPartsEducationEntry extends Struct.ComponentSchema {
  collectionName: 'components_cv_parts_education_entries';
  info: {
    displayName: 'education-entry';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String;
    end: Schema.Attribute.Date;
    institution: Schema.Attribute.String;
    start: Schema.Attribute.Date;
  };
}

export interface CvPartsExperienceEntry extends Struct.ComponentSchema {
  collectionName: 'components_cv_parts_experience_entries';
  info: {
    displayName: 'experience-entry';
    icon: 'briefcase';
  };
  attributes: {
    bullets: Schema.Attribute.Blocks;
    clients: Schema.Attribute.JSON;
    company: Schema.Attribute.String;
    end: Schema.Attribute.Date;
    role: Schema.Attribute.String;
    stack: Schema.Attribute.JSON;
    start: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
  };
}

export interface CvPartsSkillGroup extends Struct.ComponentSchema {
  collectionName: 'components_cv_parts_skill_groups';
  info: {
    displayName: 'skill-group';
    icon: 'chartCircle';
  };
  attributes: {
    items: Schema.Attribute.JSON;
    label: Schema.Attribute.String;
    years: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'cv-parts.contact': CvPartsContact;
      'cv-parts.education-entry': CvPartsEducationEntry;
      'cv-parts.experience-entry': CvPartsExperienceEntry;
      'cv-parts.skill-group': CvPartsSkillGroup;
    }
  }
}
