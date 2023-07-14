import Card from "components/Card/Card";
import Layout from "components/Layout/Layout";
import FullPageLoader from "components/PageLoader/PageLoader";
import { API_URL } from "config/apiUrl";
import { useFetch } from "hooks/useFetch";
import { IPlugins } from "interface/plugins.interface";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "services/apiRequest";
import { getPluginsData } from "utils/getAllPlugins";
import * as S from "./Plugins.styles";

const ResponsivePage: React.FC = () => {
  const { data, loading, error } = useFetch<IPlugins>(API_URL);
  const [allDisabled, setAllDisabled] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const { plugin } = useParams<{
    plugin: string;
  }>();
  const state = useLocation().state;

  useEffect(() => {
    if (!data || plugin) return;

    const { tabdata, tabs, disabled } = data.data;
    const url = `${tabdata[tabs[0]].title.toLocaleLowerCase()}`;

    setAllDisabled(disabled);
    return navigate(url);
  }, [data, navigate, plugin]);

  const handleToggleCallback = async (
    tabKey: string,
    active: boolean,
    pluginKey: string
  ) => {
    await apiRequest({
      url: API_URL,
      method: "PUT",
      body: {
        tabKey,
        field: "active",
        pluginKey,
        fieldStatus: active,
      },
    });
  };

  if (loading) {
    return <FullPageLoader />;
  }

  if (!data) return null;

  if (error) {
    return <div>Error on your request. Try refreshing the page.</div>;
  }

  const currentTabKey = state?.selectedTabKey || data.data.tabs[0];
  const allPlugins = getPluginsData(data, currentTabKey);
  const pluginsSortedByKey = Object.keys(allPlugins).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <Layout data={data} setAllDisabled={setAllDisabled}>
      <S.Wrapper>
        {pluginsSortedByKey.map((key) => (
          <Card
            key={key}
            plugin={allPlugins[key]}
            toggleCallback={handleToggleCallback}
            tabKey={currentTabKey}
            pluginKey={key}
            allDisabled={allDisabled}
          />
        ))}
      </S.Wrapper>
    </Layout>
  );
};

export default React.memo(ResponsivePage);
