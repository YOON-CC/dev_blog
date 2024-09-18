---
title: "My Markdown Post"
date: "2024-09-18"
---

## 모듈 / 번들의 개념

![](https://velog.velcdn.com/images/happycyc/post/93c5ab79-90d0-40b3-ac31-6bc899f030c6/image.png)

> 모듈

- 분리되어 있는 코드 조각

> 번들

- 모듈을 합치는 것

그래서, 모듈 번들러는 `분리되어 있는 코드 조각을 합치는 것`이다.

---

## 모듈 번들러가 필요한 이유

우리가 빌드할 때, react나 next.js를 사용하더라도 결국에는 html, css, js로 변경이 된다. 그렇기 때문에, 이것들이 많은 조각으로 되어있다면, 각 조각마다 요청을 해야하며, 결국에는 불필요한 리소스의 다운로드와 웹 애플리케이션의 로딩 속도에 영향을 미치게 된다.

특히 http/1.1환경에서는 더 그렇다.

`파일 수 제한`

- 동시에 처리할 수 있는 요청 수에 제한이 있다. 이로 인해 많은 수의 작은 파일을 요청할 때 성능이 저하될 수 있다.

`리소스 다운로드 관리`

- 동시에 여러 리소스를 다운로드하는 것이 어렵다.

`요청 오버헤드`

- HTTP/1.1에서는 각 요청마다 오버헤드가 발생한다. 모듈 번들러를 사용하면 여러 파일을 하나의 번들로 묶어서 요청 오버헤드를 감소시킬 수 있다.

이러한 이유로, 서비스가 커질 수 록 모듈 번들러의 필요성 또한 커지게 된다.

---

## 모듈 번들러의 역사

기본적으로 html, css, js파일, 그리고 이미지, 폰트 json 데이터 등 많은 파일드이 모여 하나의 웹페이지가 구성되는데, 그만큼 필요한 많은 파일들을 요청한다. http/2에서는 하나의 커넥션에 동시에 여러 파일들을 요청할 수 있지만, 위에서 언급한, http/1.1환경에서는 이것이 문제가 된다. 또한 여러 개의 파일을 로딩할 때, 같은 스코프를 공유하기 때문에 전역변수의 충돌이 발생한다. 그래서 `모듈 번들러가 등장`했다. 웹 애플리케이션을 구성하는 다양한 자원들을 하나의 번들(bundle)로 묶어주는 도구로, 의존성을 추적하여 그룹핑 해주는 도구이다.

그리고 그 중 가장 많이 쓰는 것이 `webpack`이다.

> - 최신 브라우저들은 모듈 기능을 지원한다. 이는 JavaScript 모듈 시스템 (ES modules)을 말하는데, ES modules를 사용하면 브라우저가 자체적으로 모듈을 로드하고 실행할 수 있다. 이것은 웹팩(Webpack)이나 다른 모듈 번들러를 사용하지 않아도 모듈화된 코드를 작성하고 사용할 수 있음을 의미한다.
> - 그러나 이는 모든 상황에서 적합하지는 않다. 대규모 프로젝트나 복잡한 의존성 관리를 필요로 하는 경우 웹팩과 같은 모듈 번들러를 사용하는 것이 여전히 유용할 수 있다. 모듈 번들러는 코드를 번들링하고 최적화하는 데 도움을 주고, 트랜스파일링, 코드 스플리팅, 플러그인 등의 기능을 제공하기 때문에 이는 프로젝트의 요구 사항과 규모에 따라 다를 수 있다.

## Webpack의 목표와 개념

웹팩은 매우 꼼꼼한 구성으로, 웹팩의 모듈은 자바스크립트 모듈에만 국한되어 있지 않고 웹 애플리케이션을 구성하는 모든 자원에 관점을 두는데, 해결하고자 하는 목표를 보면 다음과 같다.

- 자바스크립트 변수 유효 범위 문제 해결
- ES6의 Modules 문법과 웹팩의 모듈 번들링으로 해결
- 브라우저별 HTTP 요청 숫자 제약을 해결
- Code Splitting 기능을 이용하여 원하는 모듈을 원하는 타이밍에 로딩

---

지금부터, webpack의 동작원리를 알아보기전, 관련된 개념을 살펴보자.

`모듈`

모듈은 프로젝트에서 사용되는 독립적인 코드 조각을 의미한다. 이는 JavaScript 파일, CSS 파일, 이미지 등 다양한 형태의 파일을 포함할 수 있다. 모듈은 보통 다른 파일에서 **`import`** 또는 **`require`** 문을 사용하여 가져올 수 있다.

</br></br>

`chunk`

번들링된 파일들을 작은 조각으로 나눈 것을 의미한다. 일반적으로 청크는 프로젝트의 여러 부분을 나타내며, 브라우저에서 로드될 때 각각의 청크는 개별적으로 요청될 수 있다.

</br></br>

`Loaders`

자바스크립트만 모듈로 이해하는 것이 아닌, 웹을 구성하는 파일을 webpack이 이해할 수 있도록 하는 기능이다.

</br></br>

`Plugin`

Loader가 파일 단위로 해석하고 자바 스크립트로 변환하는 과정이라면, Plugin은 묶어진 결과물 즉, bundle을 처리한다.

---

간단하게, 동작을 알아보자

- 프로젝트의 entry point를 설정
- endtry point를 기반으로, 의존성을 찾는다.
- 각각의 파일을 처리하기 위해 로더를 적용
- 모든 의존성을 해석하고 로더를 적용한 후, 웹팩은 이를 하나 또는 여러 개의 번들로 묶는다.
- 번들링된 결과물을 지정된 경로에 출력한다.

이후, 웹팩은 다양한 옵션을 통해 번들링 프로세스를 조정할 수 있는데, 플러그인을 사용하여 번들링 이후 추가적인 작업을 수행할 수 있다. 예를 들어, 코드 최적화, 번들 사이즈 분석, 환경 변수 주입 등을 수행 한다.

---

## 직접 분석해본 webpack

두 가지 동일한 웹을 react환경에서 구현 해봤다. 하나는 webpack을 적용하지 않았고, 하나는 webpack을 적용했다.

### **webpack이 없을 때**

![](https://velog.velcdn.com/images/happycyc/post/951b85cb-ff4a-435f-bf3e-7fb05fe3e6df/image.png)

num3라는 이미지는 버튼을 클릭했을때, 표시가 된다. 지금 보면 루트가 bundle.js에서 초반에 담겨있다. 지금은 괜찮지만, 이미지 뿐 아닌 다른 자원들도 분할을 하지 않으면, 초반 로딩 속도에서 bundle.js를 받아오는게 분명 길어질 것이다.

### **webpack이 있을 때**

![](https://velog.velcdn.com/images/happycyc/post/5eeb7034-cede-4dbc-ba11-0008eab9c33d/image.png)

이때는 image를 따로 bundle.js에 포함시키지 않고, image/ 라는 디렉토리에 분리했다. 그렇기 때문에 초반 로딩에서 bundle.js는 이미지와 다른 여러 자원들을 가지고 있을 필요가 없기 때문에 약간의 최적화를 할 수 있다.

---

아래는 실제 프로젝트에 간단하게 적용한 webpack이다. 그 중 `webpack.config.js`를 분석해보자.

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: (resourcePath, resourceQuery) => {
              // assets 폴더 내의 이미지는 imgs/ 폴더로 빌드
              if (resourcePath.includes('assets')) {
                return 'imgs/[name].[ext]';
              }
              // image 폴더 내의 이미지는 hello/ 폴더로 빌드
              if (resourcePath.includes('image')) {
                return 'hello/[name].[ext]';
              }
              // 그 외의 경우는 그대로 빌드
              return '[name].[ext]';
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
    },
  };
};

```

루트 폴더에 webpack.config.js 파일을 생성하면 webpack이 자동으로 해당 파일을 사용하게 된다. 그렇다면, 위의 코드는 어떤 역할을 하는지 알아보자.

`entry: './src/index.tsx'`
진입점(entry point)을 설정한다. 애플리케이션의 진입점은 src/index.tsx 파일이다. 즉, 번들링 과정에서 웹팩은 이 파일을 기준으로 의존성 트리를 구축하여 필요한 다른 모듈을 찾아서 번들에 포함시키고, 결과물은 이러한 의존성 트리를 따라가면서 실행될 수 있도록 정리한다.

`output: { ... }`
번들링된 파일의 출력 설정을 지정한다. 개발 모드일 경우에는 bundle.js로 출력되고, 프로덕션 모드일 경우에는 콘텐츠 해시를 포함한 bundle.[contenthash].js 형식으로 출력된다.

`module: { ... }`
모듈 처리 규칙을 정의한다. TypeScript 파일은 ts-loader를 사용하여 처리하고, CSS 파일은 style-loader 및 css-loader를 사용하여 처리한다. 또한 이미지 파일은 file-loader를 사용하여 처리한다.

➕ modules 내부의 속성 추가설명

> `rules`
> 모듈 처리 규칙을 정의한다. 웹팩은 이 규칙에 따라 다양한 유형의 모듈을 처리하고 로드한다.
> `test`
> 파일 경로의 정규 표현식을 사용하여 처리할 파일을 지정한다. 예를 들어, test: /\.(ts|tsx)$/는 확장자가 .ts 또는 .tsx인 파일을 대상으로 해당 규칙을 적용하겠다는 것을 의미한다.
> `use`
> 지정된 파일에 적용할 로더(loader)를 정의하며, 로더는 파일을 처리하고 변환하는 데 사용된다. 여기서는 TypeScript 파일인 경우 ts-loader, CSS 파일인 경우 style-loader와 css-loader, 이미지 파일인 경우 file-loader가 사용된다.
> `exclude`
> 해당 규칙을 적용하지 않을 파일 경로를 지정한다. 예를 들어, exclude: /node_modules/는 node_modules 디렉토리에 있는 파일은 해당 규칙을 적용하지 않겠다는 것을 의미한다.
> `options`
> 로더에 대한 추가 옵션을 설정한다. 이 옵션들은 각 로더마다 다를 수 있다. 여기서는 file-loader에 대한 옵션을 설정하고 있으며, 이미지 파일을 처리할 때, 특정 조건에 따라 출력 파일 경로를 다르게 설정할 수 있다.

`plugins: [ ... ]`
Webpack 플러그인을 설정한다. 이 경우에는 CleanWebpackPlugin과 HtmlWebpackPlugin을 사용하는데, 전자는 빌드 이전에 출력 디렉토리를 청소하고, 후자는 HTML 파일을 생성한다.

`devServer: { ... }`
개발 서버 옵션을 설정한다. 정적 파일의 위치, 압축 설정, 포트 번호 등을 지정할 수 있다.

---

## webpack-bundle-analyzer

`webpack-bundle-analyzer`는 웹팩 번들링 과정에서 생성된 번들 파일의 크기 및 의존성을 시각적으로 분석할 수 있는 도구이다. 이를 통해 번들 파일이 어떻게 구성되어 있는지를 파악하고, 필요한 최적화 작업을 수행할 수 있다.

![](https://velog.velcdn.com/images/happycyc/post/9a18c36d-0db4-4762-bf1b-11b71c0945f7/image.png)

이를 통해, 번들 안에 실제로 무엇이 들어 있는지 파악하며, 어떤 모듈이 해당 크기를 가장 많이 구성하는지와, 실수로 도착한 모듈 찾아 다시 splitting하는데 유리하다. 현재는 테스트는 한 상태지만, 아직 마땅하게 시각적으로 보여줄 만한 큰 번들이 없기 때문에 이후, 프로젝트를 하며 내용을 추가할 계획이다.

---

## 다른 모듈 번들러

**Vite**
Webpack이 소스코드와 모든 종속 관계의 모듈을 번들링한 후에 개발 서버가 준비된다면, `Vite`는 esbuild로 미리 번들링한 모듈을 필요할 때 동적으로 가져와서 즉시 서버를 구동한다. 그래서 빠른 개발 서버 구동 속도를 제공한다.
다만, Vite가 번들링 속도에서 강점이 있지만, 개발 환경과 프로덕션 환경의 설정이 다르기 때문에 빌드 안정성이 낮는 등, 일일이 플러그인을 설치등의 이유가 있기 때문에 개발 환경에 따라 고려해야한다고 생각한다.

**터보팩**
Next.js 13부터 웹팩의 새로운 Rust 기반 후속 버전인 터보팩이 포함되어있다. 터보팩은 웹팩과 Next.js 개발자가 만든 자바스크립트와 타입스크립트 번들러로, Rust로 작성되어 웹팩보다 700배 빠르고, Vite보다 10배 빠르다.

다만, Turbopack은 아직 베타 버전 이므로 최근(2023년 5월 5일)에 봤을때는 플러그인을 아직 사용할 수 없다고 한다. 그때 당시 현직자분께 받은 조언은, `개발모드에선 Turbopack을 사용하고,  프로덕션 빌드시엔 웹팩`이라고 하셨다.

### 마무리

> 직접 적용한 webpack을 분석해보며, 이후 프로젝트의 방향을 잡을 수 있어서 좋았습니다.
