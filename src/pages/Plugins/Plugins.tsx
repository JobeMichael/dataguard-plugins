import Card from "components/Card/Card";
import Layout from "components/Layout/Layout";
import FullPageLoader from "components/PageLoader/PageLoader";
import { API_URL } from "config/apiUrl";
import { useFetch } from "hooks/useFetch";
import { IPlugin, IPlugins } from "interface/plugins.interface";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./Plugins.styles";

interface IFormattedPlugin extends IPlugin {
  active: boolean;
  disabled?: boolean;
}

const getPluginsData = (data: IPlugins, tabKey: string) => {
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

const ResponsivePage: React.FC = () => {
  const { data, loading, error } = useFetch<IPlugins>(API_URL);
  const [allDisabled, setAllDisabled] = React.useState<boolean>(false);
  console.log("🚀 ~ file: Plugins.tsx:51 ~ allDisabled:", allDisabled);
  const { plugin } = useParams<{
    plugin: string;
  }>();
  const { tabKey: selectedTabKey } =
    useLocation()?.state || ({} as { tabKey: string });
  const navigate = useNavigate();

  useEffect(() => {
    if (!data || plugin) return;

    setAllDisabled(data.data.disabled);

    const { tabdata, tabs } = data.data;
    const url = `${tabdata[tabs[0]].title.toLocaleLowerCase()}`;
    return navigate(url);
  }, [data]);

  if (loading) {
    return <FullPageLoader />;
  }
  if (!data) return null;
  if (error) {
    return <div>Something went wrong. Try again</div>;
  }

  const allPlugins = getPluginsData(data, selectedTabKey || data.data.tabs[0]);
  const pluginSortedKey = Object.keys(allPlugins).sort((a, b) =>
    a.localeCompare(b)
  );

  const handleToggleCallback = async (
    tabKey: string,
    active: boolean,
    pluginKey: string
  ) => {
    const url = `${API_URL}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tabKey,
        field: "active",
        pluginKey,
        fieldStatus: active,
      }),
    });
  };

  return (
    <Layout data={data} setAllDisabled={setAllDisabled}>
      <S.Wrapper>
        {pluginSortedKey.map((key) => (
          <Card
            key={key}
            plugin={allPlugins[key]}
            toggleCallback={handleToggleCallback}
            tabKey={selectedTabKey || data.data.tabs[0]}
            pluginKey={key}
            allDisabled={allDisabled}
          />
        ))}
      </S.Wrapper>
    </Layout>
  );
};

export default React.memo(ResponsivePage);
