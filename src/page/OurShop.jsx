import Cover from "../components/ReuseAble/Cover";
import shopImg from "../../public/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import UseMenu from "../hooks/UseMenu";
import Card from "../components/ReuseAble/Card";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <div>
        <Cover banner={shopImg} title="Our shop" />
        <div className="flex items-center justify-center my-16">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 my-8">
                {salads.map((item) => (
                  <Card key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 my-8">
                {pizza.map((item) => (
                  <Card key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 my-8">
                {soup.map((item) => (
                  <Card key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 my-8">
                {dessert.map((item) => (
                  <Card key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 my-8">
                {drinks.map((item) => (
                  <Card key={item._id} item={item} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default OurShop;
