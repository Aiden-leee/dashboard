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

```
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

```
<Button type="button" name="Primary" mode="primary" />
```
| type             | name   | bg     | color  | icon   | mode                                                                                                       |
|------------------|--------|--------|--------|--------|------------------------------------------------------------------------------------------------------------|
| string, required | string | string | string | string | 'primary',<br> 'secondary',<br> 'info',<br> 'success',<br> 'warning',<br> 'error',<br> 'light',<br> 'dark' |


## UI - Tab
Tab 컴포넌트 사용법입니다.
```
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
let tabIndex = 0;
```
