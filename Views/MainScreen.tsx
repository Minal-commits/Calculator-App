import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function MainScreen() {
    const [value, setValue] = useState('0')
    const [bracket, setBracket] = useState(false)
    const handlePress = (val: string) => {
        if(val === 'AC' ){
            setValue('0');
        }
        else if(val == '='){
            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {

                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }
                }
            }
            catch(e){
                setValue('Format Error');
            }
        }
        else if(val == 'C'){
            setValue(value.slice(0,-1))
        }
        else if(val == '()'){
            if(value=='0'){
                setValue('(');
                setBracket(true);
            }
            else if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.'){
                setValue(value+'(');
                setBracket(true);
            }
            else{
                if(bracket==true){
                    setValue(value+')');
                    setBracket(false);
                }
                else{
                    setValue(value+'(');
                    setBracket(true);
                }
            }
        }

        else{
            if(value == '0'){
                if(isNaN(val)){
                    setValue(value+val);
                }
                else{
                    setValue(val);
                }
            }
            else if(isNaN(val)){
                if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.'){
                    setValue(value.slice(0,-1)+val);
                }
                else{
                    setValue(value+val);
                }
            }
            else{
                setValue(value+val);
            }
            
        }
    }
  return (
    <View style={styles.mainScreen}>
        <ScrollView style={styles.display}>
            <View style={styles.displayStyle}><Text style={styles.resultTxt}>{value}</Text></View>
        </ScrollView>
        <View style={styles.keyboard}>

            {/* 1st row */}
            <View style={styles.keypadrow}>
                <Pressable onPress={()=>handlePress('C')}>
                    <View style={styles.btn1}>
                        <Text style={styles.bg_btn}> C </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('()')}>
                    <View style={styles.btn1}>
                        <Text style={styles.bg_btn}>(   )</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('%')}>
                    <View style={styles.btn1}>
                        <Text style={styles.bg_btn}> % </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('/')}>
                    <View style={styles.btn2}>
                        <Text style={styles.bg_btn}> / </Text>
                    </View>
                </Pressable>
            </View>

            {/* 2nd row */}
            <View style={styles.keypadrow}>
                <Pressable onPress={()=>handlePress('7')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 7 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('8')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 8 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('9')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 9 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('*')}>
                    <View style={styles.btn2}>
                        <Text style={styles.bg_btn}> * </Text>
                    </View>
                </Pressable>
            </View>

            {/* 3rd row */}
            <View style={styles.keypadrow}>
                <Pressable onPress={()=>handlePress('4')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 4 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('5')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 5 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('6')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 6 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('-')}>
                    <View style={styles.btn2}>
                        <Text style={styles.bg_btn}> - </Text>
                    </View>
                </Pressable>
            </View>


            {/* 4th row */}
            <View style={styles.keypadrow}>
                <Pressable onPress={()=>handlePress('1')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 1 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('2')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 2 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('3')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 3 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('+')}>
                    <View style={styles.btn2}>
                        <Text style={styles.bg_btn}> + </Text>
                    </View>
                </Pressable>
            </View>


            {/* 5th row */}
            <View style={styles.keypadrow}>
                <Pressable onPress={()=>handlePress('0')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}> 0 </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('.')}>
                    <View style={styles.btn3}>
                        <Text style={styles.bg_btn}>  .  </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('AC')}>
                        <View style={styles.btn1}>
                            <Text style={styles.bg_btn} >AC</Text>
                        </View>
                    </Pressable>
                <Pressable onPress={()=>handlePress('=')}> 
                    <View style={styles.btn2}>
                        <Text style={styles.bg_btn}> = </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainScreen:{
        height: '100%',
        backgroundColor:'#000',
    },
    display:{
        
    },
    displayStyle:{
        height: 300,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 20
    },
    resultTxt:{
        fontSize: 38,
        fontWeight: '600'
    },
    keyboard:{},
    keypadrow:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: "1%",
        marginHorizontal: "1%",
    },
    btn1:{
        padding: 30,
        margin: 8,
        backgroundColor: '#a6a6a6',
        borderRadius: 100
    },
    btn2:{
        padding: 30,
        margin: 8,
        backgroundColor: '#ff9700',
        borderRadius: 100
    },
    btn3:{
        padding: 30,
        margin: 8,
        backgroundColor: '#333333',
        borderRadius: 100
    },
    bg_btn:{
        fontSize: 18,
        fontWeight: '800'
    }
})