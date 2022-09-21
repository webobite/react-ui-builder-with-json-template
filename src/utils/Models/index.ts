export interface IComponent {
  name: string;
  type: string;
  renderer: string;
}

export interface ILayout {
  name: string;
  renderer: string;
  position: string;
  components: IComponent[];
}

export interface IComponentProps {
  name: string
  properties?: any
}

export interface ILocalStorages {
  name: string,
  email: string,
  profilePic: string
}