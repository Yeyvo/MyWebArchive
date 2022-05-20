// export interface ProjectSmall{
//   uid: string;
//   name: string;
//   teamMembers: string[];
//   description: string;
//   tags: string[];
// }

// export interface Project {
//   uid: string;
//   name: string;
//   teamMembers: string[];
//   description: string;
//   tags: string[];
//   versions?: Version[];
// }
//
//
// export interface Version {
//   datePush: Date,
//   versionNumber: string,
//   publisherUID: string,
//   comments?: Comment[],
//   dataURL: string,
//   modifications: string
// }
//
// export interface Comment {
//   dateComment: Date,
//   data: string,
//   publisherUID: string,
//   ispublisherTeacher: boolean
// }

export interface Comment {
  prof: string;
  contenu: string
}

// export interface Version {
//   uid: string;
//   comments: {
//     comment: {
//       prof: string;
//       contenu: string
//     }[]
//   };
//   numero: string;
//   publisher: string;
//   description: string;
//   contenu: string
// }
export interface Version {
  uid: string;
  publisher: string;
  numero: string;
  description: string;
  comments: {
    comment: ({
      prof: string;
      contenu: string;
    })[]
  };
  // comments: {
  //   comment: ({
  //     prof: string;
  //     contenu: string;
  //   })[]
  // };
  contenu: string
}

export interface Project {
  uid: string;
  titre: string;
  note: number;
  description: string;
  motscles: { motcle: string[] };
  comments: {
    comment: ({
      prof: string;
      contenu: string
    })[]
  };
  versions: { version: (Version)[] };
  // versions: {
  //   version:
  //     (Version)[]
  // };
  membres: { uid: string[] };
  profId: string;
  status: string;
  type: string;
}


interface Test {
  versions: {
    version: {
      uid: number;
      comments: {
        comment: {
          prof: string;
          contenu: string
        }[]
      };
      numero: number;
      publisher: number;
      description: string;
      contenu: string
    }[]
  };
}

let test: Test = {
  "versions": {
    "version": [
      {
        "uid": 1,
        "publisher": 2,
        "numero": 1,
        "description": "this is a description",
        "comments": {
          "comment": [
            {
              "prof": "prof1",
              "contenu": "contenu comment"
            }
          ]
        },
        "contenu": "projet1version1.pdf"
      }
    ]
  }
};
