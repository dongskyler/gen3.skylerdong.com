export interface IfcResumeBasics {
  basics?: {
    name?: string;
    names?: {
      firstName?: string;
      middleName?: string;
      lastName?: string;
    };
    label?: string;
    picture?: string;
    email?: string;
    phone?: string;
    website?: string;
    summary?: string;
    location?: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryCode?: string;
      region?: string;
    };
    profiles?: {
      network?: string;
      username?: string;
      url?: string;
      icon?: {
        iconPrefix?: string | any;
        iconName?: string | any;
      };
    }[];
    resumeDownload?: string;
  };
}
