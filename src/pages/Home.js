import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components';
import { Icon } from 'native-base';

import {data} from '../data/data';

const MainView = styled(View)`
  background-color: #E0E0E0;
  flex: 1;
  height: 100%;
`;

const CenterView = styled(View)`
display: flex;
margin-top: auto;
margin-bottom: auto;
justify-content: center;
`;

const ListMainView = styled(View)`
 background-color: white;
 margin-right: 5px;
 margin-left: 5px;
`;

const ListView = styled(View)`
 flex-direction: row;
 justify-content: space-between;
`;

const ListText = styled(Text)`
font-size: 20px;
 margin-left: 5px;
 margin-bottom: 5px;
`
const SubListView = styled(View)`
 margin-left: 15px;
`;

const SubListText = styled(Text)`
font-size: 18px;
 margin-left: 5px;
 margin-bottom: 5px;
`

class Home extends React.Component {

    state = {
        perentData: [],
    }

    componentDidMount () {
        this.getPerentData();
    }

    getPerentData = () => {
       const parentDatas =  data.filter(singleData=> singleData.parent == 0);
       this.setState({perentData: parentDatas});
    }

    expandList = (expandListId) =>{
        const expandDatas =  data.filter(singleData=> singleData.parent == expandListId );
        this.setState(prevState=>({
            perentData: prevState.perentData.map(
                el => el.id === expandListId ? { ...el, expandData: expandDatas }: { ...el, expandData: [] }
              )
        }))
    }

    render() {
        return(
            <MainView>
                <CenterView>
               {this.state.perentData.length > 0 ? 
                // <FlatList
                //     data={this.state.perentData}
                //     keyExtractor={item=>item.id.toString()}
                //     renderItem={({item}) => 
                this.state.perentData.map(item => {
                    return(
                    <ListMainView key={item.id}>
                        <ListView>
                        <TouchableOpacity onPress={()=>this.expandList(item.id)}>
                            <ListText>{item.name}</ListText>
                            
                            {/* <Icon type="FontAwesome" name="angle-down"/> */}
                            {/* <Text>{item.id}</Text> */}
                            </TouchableOpacity>
                        </ListView>
                        { item.expandData ? 
                            item.expandData.map(element => {
                                return(
                                <ListView key={element.id}>
                                    <SubListView><SubListText>{element.name}</SubListText></SubListView>
                                </ListView>
                                )
                            })
                         : null}
                    </ListMainView>
                    )
                })
                    
                    // }
                // />
                : null
                }
                </CenterView>
            </MainView>
        )
    }
}

export default Home;