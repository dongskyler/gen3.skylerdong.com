export interface IfcResumeProjects {
  projects?: {
    name?: string;
    organization?: string;
    position?: string;
    startDate?: string;
    endDate?: string;
    website?: string;
    repository?: string;
    summary?: string;
    highlights?: string[];
  }[];
}
