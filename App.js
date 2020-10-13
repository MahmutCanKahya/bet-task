/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import moment from 'moment/min/moment-with-locales';
import { Container, Header, ScrollableTab, Tab, Tabs } from 'native-base';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
let { width } = Dimensions.get("window");


const fakeData = [
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "start_time": "13-10-2020 15:30",
    "teams": [
      "Bournemouth",
      "Everton"
    ],
    "commence_time": 1535205600,
    "home_team": "Bournemouth",
    "odds": [
      {
        "name": "h2h",
        "odd": [
          2.3,
          3.5,
          2.88
        ]
      },
      {
        "name": "ms",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "çş",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "1,5",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      }
    ],
    "sites_count": 6
  },
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "start_time": "15-10-2020 20:00",
    "teams": [
      "Arsenal",
      "West Ham United"
    ],
    "commence_time": 1535205600,
    "home_team": "Arsenal",
    "odds": [
      {
        "name": "h2h",
        "odd": [
          2.3,
          3.5,
          2.88
        ]
      },
      {
        "name": "ms",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "çş",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "1,5",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      }
    ],
    "sites_count": 6
  },
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "start_time": "16-10-2020 13:30",
    "teams": [
      "Huddersfield Town",
      "Cardiff City"
    ],
    "commence_time": 1535205600,
    "home_team": "Huddersfield Town",
    "odds": [
      {
        "name": "h2h",
        "odd": [
          2.3,
          3.5,
          2.88
        ]
      },
      {
        "name": "ms",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "çş",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "1,5",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      }
    ],
    "sites_count": 6
  },
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "start_time": "14-10-2020 20:00",
    "teams": [
      "Southampton",
      "Leicester City"
    ],
    "commence_time": 1535205600,
    "home_team": "Southampton",
    "odds": [
      {
        "name": "h2h",
        "odd": [
          2.3,
          3.5,
          2.88
        ]
      },
      {
        "name": "ms",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "çş",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "1,5",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      }
    ],
    "sites_count": 6
  },
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "start_time": "14-10-2020 20:00",
    "teams": [
      "Southampton",
      "Leicester City"
    ],
    "commence_time": 1535205600,
    "home_team": "Southampton",
    "odds": [
      {
        "name": "h2h",
        "odd": [
          2.3,
          3.5,
          2.88
        ]
      },
      {
        "name": "ms",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "çş",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "1,5",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      }
    ],
    "sites_count": 6
  },
  {
    "sport_key": "soccer_epl",
    "sport_nice": "EPL",
    "start_time": "14-10-2020 20:00",
    "teams": [
      "Southampton",
      "Leicester City"
    ],
    "commence_time": 1535205600,
    "home_team": "Southampton",
    "odds": [
      {
        "name": "h2h",
        "odd": [
          2.3,
          3.5,
          2.88
        ]
      },
      {
        "name": "ms",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "çş",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      },
      {
        "name": "1,5",
        "odd": [
          2.65,
          2.7,
          3.6
        ]
      }
    ],
    "sites_count": 6
  }
]
const odds = ["H2H", "MS", "En çok Gol alacak", "1. Yarı",]


const App = () => {
  const renderItem = (item, oddName) => {
    return <View>
      <View style={{ backgroundColor: "#888", flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginHorizontal: 10 }}>{item.sport_nice}</Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginHorizontal: 10 }}>{moment(item.start_time, "DD-MM-YYYY hh:mm").locale('tr').calendar()}</Text>
      </View>
      <View style={{ backgroundColor: "#bbb", }}>
        <Text style={{ color: "#21a", fontWeight: "bold", fontSize: 20, marginHorizontal: 10 }}>{item.teams.join(" - ")}</Text>
      </View>

      <View style={{ backgroundColor: "#ddd", padding: 10, flexDirection: "column", }}>

        <View style={{ flexDirection: "row" }}>
          {item.odds[odds.findIndex(odd => odd == oddName)].odd.map(item => {
            return (<View key={item} style={{ backgroundColor: "#4F4F7F", marginHorizontal: 6, borderRadius: 6, padding: 7 }}>
              <Text style={{ marginHorizontal: 10, fontSize: 20, color: "white" }}>{item}</Text>
            </View>)
          })}
        </View>

      </View>
    </View >
  }
  return (
    <>
      <StatusBar hidden />
      <Text style={styles.header}>Bet Swipe List</Text>
      <Container  style={{ flex: 1 }}>
        <Tabs
          initialPage={0}
          scrollWithoutAnimation
          prerenderingSiblingsNumber={1}
          tabBarUnderlineStyle={{ backgroundColor: "#EFF531" }} renderTabBar={() => <ScrollableTab />}>
          {
            odds.map(odd => {
              return <Tab  tabStyle={{ backgroundColor: "#0E676A" }} activeTabStyle={{ backgroundColor: "#0E676A" }} textStyle={{ color: "white",marginBottom:5 }} activeTextStyle={{ color: "#EFF531",marginBottom:5 }} heading={odd} key={odd}>
                <FlatList
                  key={odd}
                  data={fakeData.sort(function (a, b) { return moment(a.start_time, "DD-MM-YYYY hh:mm") - moment(b.start_time, "DD-MM-YYYY hh:mm") })}
                  renderItem={({ item }) => renderItem(item, odd)}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                >
                </FlatList>
              </Tab>
            })
          }
        </Tabs>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    backgroundColor: "red"
  }
});

export default App;
