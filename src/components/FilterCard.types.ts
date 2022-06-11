export type FilterCardPropsType = {
  title: string;
  timePassed: string;
  jobType: string;
  jobLocation: string;
  companyName: string;
  extraFeatures?: Array<string>;
  logo: string;
  filters: Array<string>;
};

export type GetNameType = Omit<FilterCardPropsType, 'title'>;
