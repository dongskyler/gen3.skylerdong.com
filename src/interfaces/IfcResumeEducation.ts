export interface IfcResumeEducation {
  education?: {
    institution?: string;
    city?: string;
    region?: string;
    countryCode?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    gpa?: string;
    courses?: string[];
  }[];
}
