import React from 'react';
import { useState, useEffect } from 'react';
import {Text, View, TextInput, ScrollView, Pressable, Animated, RefreshControl} from 'react-native';
import {Picker} from  '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';









const GPAcalculator = () => {
  const [fields, setFields] = useState([{module: '', grade: '', credits: ''}]);
  const [result, setResult] = useState('');
  const [credits, setCredits] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-400));
  const [pass, setPass] = useState('');

  
  
  const onRefresh = React.useCallback(() => {
    setPass('');
    setResult(0);
    setCredits(0);
    setFields([{module: '', grade: '', credits: ''}]);
    setRefreshing(true);
    setTimeout(() => {
    setRefreshing(false);
    }, 2000);
}, []);

  const slideIn = () => {
    
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();

  }

  const handler1 = () => {
    slideIn();
    calculateGPA();
  }







  const addfields = () => {
    setFields([...fields, {module: '', grade: '', credits: ''}])
  }

  const handleCourseChange = (index, key, value) => {
    const newCourses = [...fields];
    newCourses[index][key] = value;
    setFields(newCourses);
  };

  const handleDeleteCourse = () => {
    setFields(fields.slice(0, -1))
  };


  const calculateGPA = () => {
      let total = 0;
      let credit = 0;
    
      fields.forEach((field) => {
        const grade = field.grade;
        const creditHours = parseInt(field.credits);
    
        if (grade === "A+" || grade === "A") {
          total += 15.0;
        } else if (grade === "A-") {
          total += 14.1;
        } else if (grade === "B+") {
          total += 12.9;
        } else if (grade === "B") {
          total += 12.0;
        } else if (grade === "B-") {
          total += 11.1;
        } else if (grade === "C+") {
          total += 9.9;
        } else if (grade === "C") {
          total += 9.0;
        } else if (grade === "C-") {
          total += 8.9;
        } else if (grade === "D") {
          total += 6.0;
        } else if (grade === "E") {
          total += 3.0;
        } else if (grade === "F") {
          total += 0.0;
        }

                
        credit += creditHours;
        setCredits(credit);

      
      });
    
      const cgpa = total / credit;
      setResult(cgpa.toFixed(2));
      if (cgpa >= 3.00){
        setPass('You passed the semester');
      }else{
        setPass('You failed the semester');
      }
    };

  return (
    <View className = 'flex-1 p-4' >
      <Animated.View className = 'bg-white rounded-lg shadow' 
      style={[
        {
          transform: [
            {
              translateX: slideAnim,
            },
          ],
        },
      ]}
      >
        {result !== "" && (
    <View className = 'bg-white rounded-lg shadow-sm' >
        <Text className = 'text-sm text-start ml-3' >Semester GPA:    {result}</Text>
        <Text className = 'text-sm text-start ml-3' >Semester Credits:    {credits}</Text>
        <Text className = 'text-sm text-start ml-3' >Remarks:    {pass}</Text>
    </View>
    )}
  
    
      </Animated.View>
      
    
      
      <Text className = 'text-center font-black mt-5 '>Note: Use 3 credit Hours only </Text>
      <ScrollView  
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      className = ' bg-white rounded-lg h-96 mb-5 mt-4  ' >
      
      {fields.map((fields, index) => (
        <View key={index} className = 'flex-row items-center justify-center align-middle ' >
          

          
          <View className = ' border border-gray-400 mt-3 w-72 rounded-lg ml-5 mr-5' >
          
            <View className = 'ml-2' >
          {/* <Text>Module {index + 1}:</Text> */}
          <TextInput
            
            value={fields.module}                                                                                                                                                                                                                                                                                                                                                                        
            onChangeText={(text) =>
              handleCourseChange(index, "module", text)
            }
            placeholder="Module name"
          /> 
          </View>
          <View className = 'flex-row' >
            <View className = 'w-40 mt-2 border-t border-r  border-gray-400' >
          {/* <Text>Grade:</Text> */}
          
          
          
          <Picker
            enabled = {true}
            mode ='dialog'
            prompt=''
            testID="examplePicker"
            accessibilityLabel="Example Picker"
            itemStyle={{ color: 'blue', fontSize: 20 }}
            
            
            
            selectedValue={fields.grade}
            onValueChange={(value) => handleCourseChange(index, "grade", value)}
            
          >
            <Picker.Item  label="Grade" value="" />            
            <Picker.Item  label="A+" value="A+" />
            <Picker.Item  label="A" value="A" />
            <Picker.Item  label="A-" value="A-" />
            <Picker.Item  label="B+" value="B+" />
            <Picker.Item  label="B" value="B" />
            <Picker.Item  label="B-" value="B-" />
            <Picker.Item  label="C+" value="C+" />
            <Picker.Item  label="C" value="C" />
            <Picker.Item  label="C-" value="C-" />
            <Picker.Item  label="D" value="D" />
            <Picker.Item  label="E" value="E" />
            <Picker.Item  label="F" value="F" />
          </Picker>
          
          </View>
          
          
            
          <View className = 'w-32 mt-2 border-t h-8 border-gray-400' >
          {/* <Text>Credit Hours:</Text> */}
          <Picker
            enabled = {true}
            mode ='dialog'
            
            
            
            selectedValue={fields.credits.toString()}
            onValueChange={(value) => { 
              const newCredits = value !== "" ? parseInt(value) : 0;
              handleCourseChange(index, "credits", newCredits)}}
            
          >
            <Picker.Item  label="Credit" value="" />            
            <Picker.Item  label="1" value="1" />
            <Picker.Item  label="2" value="2" />
            <Picker.Item  label="3" value="3" />
            
          </Picker>
          
          </View>
        </View>
        
        </View>
        
        <Pressable onPress={handleDeleteCourse} >
        <View className = '' >
        <View className = 'justify-center items-center mt-12 -ml-5 pb-11' >
        <Ionicons name="md-trash-bin" size={13} color="black" />
        </View>
        </View>
        </Pressable>
        
        </View>
      ))}
      

      {/* <Image source={solImage} /> */}

      
      <Pressable onPress={addfields}>
        <View className = 'items-center mt-5'>
            <View className = 'justify-center mb-5  w-72 h-7 border items-center border-dashed animate-bounce' >
                <Text className = 'font-semibold' >Add Class</Text>
            </View>
        </View>
      </Pressable>
      </ScrollView>
      
      
      
      
      <Pressable onPress={handler1} >
      <View className = 'items-center h-8 '>
      <View className = 'mb-5 bg-blue-500 rounded-lg h-8 items-center justify-center w-60' >
      <Text className = 'text-white font-bold' >Calculate</Text>
      </View>
      </View>
      </Pressable>
      
      
      
      
      
      

    </View>
      
  );

};

export default GPAcalculator;
