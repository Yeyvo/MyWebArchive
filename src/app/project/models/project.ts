// export interface ProjectSmall{
//   uid: string;
//   name: string;
//   teamMembers: string[];
//   description: string;
//   tags: string[];
// }

export interface Project {
  uid: string;
  name: string;
  teamMembers: string[];
  description: string;
  tags: string[];
  versions?: Version[];
}


export interface Version{
  datePush : Date,
  versionNumber : string,
  publisherUID : string,
  comments?: Comment[],
  dataURL : string,
  modifications : string
}

export interface Comment{
  dateComment: Date,
  data: string,
  publisherUID: string,
  ispublisherTeacher : boolean
}
