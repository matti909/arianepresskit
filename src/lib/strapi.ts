import qs from "qs";

const BASE_URL = "http://localhost:4000";

async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Strapi URL:", error);
    return null;
  }
}

const QUERY_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero": {
          populate: {
            picture: {
              fields: ["url", "alternativeText", "width", "height"]
            },
            logo: {
              fields: ["url", "alternativeText", "width", "height"]
            }
          }
        }
      }
    }
  }
};

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE, {
    encodeValuesOnly: true,
  });

  const response = await getStrapiData(`/api/home-page?${query}`);

  if (response?.data?.sections) {
    response.data.sections = response.data.sections.map((section: any) => {
      if (section.picture?.url) {
        section.picture.url = `${BASE_URL}${section.picture.url}`;
      }
      if (section.logo?.url) {
        section.logo.url = `${BASE_URL}${section.logo.url}`;
      }
      return section;
    });
  }

  return response?.data;
}
