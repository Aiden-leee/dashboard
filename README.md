# Dashboard
<img width="600" alt="스크린샷 2020-09-03 오후 11 39 56" src="https://user-images.githubusercontent.com/52125590/92133415-5258eb00-ee43-11ea-8678-a46cd68b360c.png">

<img width="600" alt="스크린샷 2020-09-03 오후 11 40 37" src="https://user-images.githubusercontent.com/52125590/92133426-55ec7200-ee43-11ea-866e-2f5eaf571ded.png">

### Dashboard Link
[view](http://dashboard-vue.s3-website.ap-northeast-2.amazonaws.com/).

## Project Explain

Vue.js로 만든 대시보드 입니다.   
Login, Signup, Dashboard, Component, Map, Chart 페이지로 구성 되어있습니다.

## Login, Signup
로그인 박스를 깔끔하게 중앙에 배치하고, 
배경에 사각형태를 각각 애니메이션과 딜레이를 주어서 시간차로 올라오는 효과를 주었습니다.

## Grid
레이아웃 Grid는 아래의 패턴을 갖고 있습니다.   
<img width="336" alt="스크린샷 2020-09-04 오전 12 24 08" src="https://user-images.githubusercontent.com/52125590/92135165-5f76d980-ee45-11ea-9391-5186dc47ea72.png">

```javascript
<div class="row">
  <div class="col">
    <div class="card">
      <div class="card_header">
        <h4>Text</h4>
      </div>
      <div class="card_body">
        ....
      </div>
    </div>
  </div>
</div>
```

## UI - Button
Button 컴포넌트 사용법입니다.     
<img width="577" alt="스크린샷 2020-09-04 오전 12 16 28" src="https://user-images.githubusercontent.com/52125590/92133948-ecb92e80-ee43-11ea-9495-564f2417bb60.png">

```javascript
<Button type="button" name="Primary" mode="primary" />
```
| type             | name   | bg     | color  | icon   | mode                                                                                                       |
|------------------|--------|--------|--------|--------|------------------------------------------------------------------------------------------------------------|
| string, required | string | string | string | string | 'primary',<br> 'secondary',<br> 'info',<br> 'success',<br> 'warning',<br> 'error',<br> 'light',<br> 'dark' |


## UI - Tab
Tab 컴포넌트 사용법입니다.   
<img width="500" alt="스크린샷 2020-09-04 오전 12 28 31" src="https://user-images.githubusercontent.com/52125590/92135608-f2177880-ee45-11ea-9691-99e4f648776c.png">

```javascript
<Tabs :tabIndex.sync="tabIndex">
  <Tab name="Tab1" :active="true">
    <h3 class="title mb-1">First Tab Content</h3>
    <p>Tabs Component 1</p>
  </Tab>
  <Tab name="Tab2">
    <h3 class="title mb-1">Second Tab Content</h3>
    <p>Tabs Component 2</p>
  </Tab>
  <Tab name="Tab3">
    <h3 class="title mb-1">Third Tab Content</h3>
    <p>Tabs Component 3</p>
  </Tab>
</Tabs>
export default {
  data() {
    return {
      tabIndex: 0
    }
  }
}
```

## UI - Input Radio
Radio 컴포넌트 사용법입니다.   
<img width="104" alt="스크린샷 2020-09-04 오전 12 33 11" src="https://user-images.githubusercontent.com/52125590/92136464-03ad5000-ee47-11ea-9a04-394843151ce9.png">
```javascript
<Radio
  id="radio01"
  name="radio1"
  label="Radio01"
  checked
  v-model="radioCheck01"
  value="test1"
></Radio>
export default {
  data() {
    return {
      radioCheck01: true
    }
  }
}
```
| id               | name            | label  | value | checked | disabled |
|------------------|-----------------|--------|-------|---------|----------|
| string, required | string, required| string | null  | boolean | null     |


## UI - Input Checkbox
Checkbox 컴포넌트 사용법 입니다.   
<img width="111" alt="스크린샷 2020-09-04 오전 12 33 22" src="https://user-images.githubusercontent.com/52125590/92136888-86360f80-ee47-11ea-93a4-8db9da9dc409.png">
```javascript
<Checkbox
  id="chk1"
  name="chk1"
  :val="1"
  checked
  v-model="checkbox01"
  label="checkbox1"
></Checkbox>
export default {
  data() {
    return {
      checkbox01: []  
    }
  }
}
```
| id               | name             | label            | val            | value | checked | disabled |
|------------------|------------------|------------------|----------------|-------|---------|----------|
| string, required | string, required | string, required | null, required | null  | boolean | null     |


## UI - Input 
Input 컴포넌트 사용법 입니다.   
<img width="290" alt="스크린샷 2020-09-04 오전 12 33 31" src="https://user-images.githubusercontent.com/52125590/92137189-d7460380-ee47-11ea-9fb2-402631cfebc6.png">

```javascript
<Input
  id="input01"
  placeholder="text"
  v-model="ipt01"
/>
export default {
  data() {
    return {
      ipt01: ""
    }
  }
}
```

`검색버튼 결합 Input` 
```javascript
<div class="ui-input-combine">
  <Input id="input04" placeholder="text" v-model="ipt04" />
  <Button
    type="submit"
    class="ui-btn btn-primary"
    name="검색"
  ></Button>
</div>
export default {
  data() {
    return {
      ipt04: "" 
    }
  }
}
```
| id               | type                        | color  | value | placeholder | disabled |
|------------------|-----------------------------|--------|-------|-------------|----------|
| string, required | string,<br> default: "text" | string | null  | string      | null     |


## UI - Input Switch(toggle)
Switch 컴포넌트 사용법입니다.   
<img width="141" alt="스크린샷 2020-09-04 오전 12 33 43" src="https://user-images.githubusercontent.com/52125590/92139177-589e9580-ee4a-11ea-8eeb-495b58aa3a0f.png">
```javascript
<Toggle
  id="switchs2"
  name="onoff2"
  label="On&Off"
  v-model="switch02"
></Toggle>
export default {
  data() {
    return {
      switch02: true 
    }
  }
}
```
| id               | name            | val     | value   | mode    | label  | checked | disabled |
|------------------|-----------------|---------|---------|---------|--------|---------|----------|
| string, required | string,required | boolean | boolean | boolean | string | boolean | null     |

## UI - Textarea
Textarea 컴포넌트 사용법입니다.   
<img width="646" alt="스크린샷 2020-09-04 오전 12 33 52" src="https://user-images.githubusercontent.com/52125590/92139637-f98d5080-ee4a-11ea-879c-908a64ae3e55.png">
```javascript
<Textarea
  id="textarea01"
  name="textarea01"
  :cols="30"
  :rows="10"
  placeholder="text..."
  v-model="textareaValue"
></Textarea>
export default {
  data() {
    return {
      textareaValue: "' 
    }
  }
}
```
| id               | name            | cols                    | rows                    | value  | placeholder | disabled |
|------------------|-----------------|-------------------------|-------------------------|--------|-------------|----------|
| string, required | string,required | number,<br> default: 30 | number,<br> default: 10 | string | string      | null     |


## UI - Table
Table 컴포넌트 사용법입니다.   
<img width="642" alt="스크린샷 2020-09-04 오전 1 19 08" src="https://user-images.githubusercontent.com/52125590/92140906-b16f2d80-ee4c-11ea-8971-4e917c09deb9.png">
```javascript
<Table
  :column-data="tableColumn"
  :table-data="tableList"
  :row="row"
></Table>
export default {
  data() {
    return {
      row: 5,
      tableColumn: ['No', 'ID', 'Name'],
      tableList: []
    }
  }  
}
```
| columnData          | tableData                     | row                  | paging                     |
|---------------------|-------------------------------|----------------------|----------------------------|
| Array,<br> required | [Object, Array],<br> required | number,<br> required | boolean,<br> default: true |

## modal(popup)
Popup 컴포넌트 사용법입니다.   
<img width="685" alt="스크린샷 2020-09-04 오전 1 24 57" src="https://user-images.githubusercontent.com/52125590/92141494-7a4d4c00-ee4d-11ea-8bc6-8ab05bb3d242.png">

```javascript
<Button
  type="button"
  @click="openPopup"
  mode="primary"
  name="Popup"
></Button>
<Popup
  id="popup01"
  @close="closePopup"
  @complete="complete"
  v-if="popup01"
>
  <h4 slot="header">Popup01</h4>
  <div class="text">
    Popup Component
  </div>
</Popup>
export default {
   data() {
	return {
		popup01: false,
	};
   },
   methods: {
	openPopup() {
		this.popup01 = true;
	},
	closePopup() {
		this.popup01 = false;
	},
	complete() {
		this.popup01 = false;
	},
   },
};
```
