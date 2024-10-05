export type Donor = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  name: string;
  avatar: string;
  url: string;
  uri: string;
  following_count: number;
};

export type DonorResponse = {
  id: number;
  email: string;
  name: string;
  avatar: string;
  url: string;
  uri: string;
  following_count: number;
};
