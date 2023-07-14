import { IPlugin, IPlugins } from "interface/plugins.interface";

interface IFormattedPlugin extends IPlugin {
  active: boolean;
  disabled?: boolean;
}
export const getPluginsData = (data: IPlugins, tabKey: string) => {
  const allPlugins: Record<string, IFormattedPlugin> = {};
  const tabData = data.data.tabdata[tabKey];
  const plugins = data.data.plugins;

  tabData.active.forEach((plugin) => {
    allPlugins[plugin] = {
      ...plugins[plugin],
      active: true,
      disabled: false,
    };
  });

  tabData.inactive.forEach((plugin) => {
    allPlugins[plugin] = {
      ...plugins[plugin],
      active: false,
      disabled: false,
    };
  });

  tabData.disabled.forEach((plugin) => {
    allPlugins[plugin] = {
      active: false,
      ...plugins[plugin],
      disabled: true,
    };
  });

  return allPlugins;
};
