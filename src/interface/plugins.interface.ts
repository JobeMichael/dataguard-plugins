export interface IPlugins {
  data: Data;
  errors: null;
}

export interface Data {
  tabs: string[];
  tabdata: Record<string, ITab>;
  plugins: { [key: string]: IPlugin };
  disabled: boolean;
}

export interface IPlugin {
  title: string;
  description: string;
}

export interface ITab {
  title: string;
  icon: string;
  active: string[];
  disabled: string[];
  inactive: string[];
}
