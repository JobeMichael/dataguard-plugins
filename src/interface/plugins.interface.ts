export interface IPlugins {
  data: Data;
  errors: null;
}

export interface Data {
  tabs: string[];
  tabdata: Record<string, Tab>;
  plugins: { [key: string]: IPlugin };
}

export interface IPlugin {
  title: string;
  description: string;
}

export interface Tab {
  title: string;
  icon: string;
  active: string[];
  disabled: string[];
  inactive: string[];
}
