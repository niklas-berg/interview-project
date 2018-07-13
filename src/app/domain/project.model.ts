export interface Project {
  id: string;
  name: string;
  customer: string;
  projectManager: string;
  date: Date;
  description: string;
  position: {
    _latitude: number;
    _longitude: number;
  };
  images: string[];
  dataUrl: string;
  dataVersion: number;
  active: boolean;
<<<<<<< HEAD
//	visible: boolean;
=======
>>>>>>> bf2cea330e714da298c383922a7d310d23351b71
}
