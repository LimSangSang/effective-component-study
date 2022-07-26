# Effective Component

토스 SLASH22 Effective Component 지속 가능한 성장과 컴포넌트의 영상을 보고 실습한 프로젝트입니다.

## 변경에 유연한 컴포넌트
1. Headless 기반의 추상화하기
    - 변하는 것 vs 상대적으로 변하지 않는 것
2. 한 가지 역할만 하기
    - 또는 한 가지 역할만 하는 컴포넌트의 조합으로 구성
3. 도메인 분리하기
    - 도메인을 포함하는 컴포넌트와 그렇지 않은 컴포넌트 분리하기 

### Headless 기반의 추상화하기

컴포넌트는 크게 세 가지 역할을 한다.

1. 외부에서 주입받은 데이터를 관리하고, 상태와 같은 내부 데이터도 관리한다.
2. 그리고 그 데이터가 용자에게 어떻게 보여질지 정의한다.(UI)
3. 이 UI를 기반으로 사용자와 어떻게 상호작용할지 정의한다.

어떻게 보여질지 정의하는 부분은 디자인에 의존한다. 디자인에 의존하는 UI를 컴포넌트가 관리하는 데이터와 분리해보면 어떨까? 만약 달력을 만든다고 할 때 달력을 구성하고 있는 데이터 자체는 변하지 않지만 UI는 언제든 바뀔 수 있다. UI를 관심사에서 제외하고 오로지 데이터에만 집중해서 모듈화할 수 있는 것을 Headless라고 한다. 한 가지 문제에만 집중하기 때문에 더 많은 곳에서 사용할 수 있고 다른 변경으로부터 격리시킬 수 있다.

컴포넌트 내부에 여러 로직이 들어가있으면 복잡하기 때문에 상호작용하는 부분도 UI와 분리시키면 좋다(ex. 이벤트리스터). 데이터 부분을 추상화한 것처럼 상호작용 부분을 따로 추상화할 수 있다.

### 한 가지 역할만 하기

변경에 유연해지려면 각 모듈이 한 가지 일만 하는 게 중요하다. 버튼처럼 간단한 컴포넌트는 한 가지 일만 잘 수행했지만 복잡한 컴포넌트는 어떨까 생각해보자. 한 가지 역할만 하는 조합으로 구성되어 있기 때문에 빠르게 대응할 수 있다. Headless 기반으로 추상화를 하고 조합으로 컴포넌트를 표현한다. 

### 도메인 분리하기 

모든 컴포넌트에서 데이터에 접근할 수 있지만 컴포넌트를 주입받은 것처럼 데이터도 주입받으면 어떨까? 언제 데이터를 주입받고 언제 스스로 데이터를 가져오나? 도메인 맥락을 지우면 일반적인 이름으로 바뀌게 된다. 컴포넌트 인터페이스는 일반적일수록 이해하기 쉽다. 컴포넌트 인터페이스를 구성하는 컴포넌트의 이름과 props 네이밍을 일반적이게 구성한다면 보다 잘 이해할 수 있다. 컴포넌트의 인터페이스가 표준에 가까울수록 많은 사람들이 쉽게 이해할 수 있다. 비지니스 로직은 스스로 처리하되 UI 로직을 위임하는 방식으로 볼 수 있다.

## 바로 시도할 수 있는 액션 아이템

1. 인터페이스를 먼저 고민하기
    - 구현해야하는 어떤 기능이 이미 만들어져있다고 가정하고 그것을 사용하듯이 작성해본다. UI에 속지않고 데이터 흐름을 파악하면 쉽게 구조를 잡을 수 있다. 만들고나서 사용하려고 하니 사용하는 입장에서 봤을 때 의도를 파악하기 어려운 문제가 있었다. 컴포넌트가 해야하는 기능은 무엇인지, 어떤 데이터를 관리하고 있는지 그리고 이것이 인터페이스로 어떻게 표현되어야 하는지가 구현보다 중요하다. 이것이 변경하려고 할 때 파악해야 하는 것들이기 때문이다. 그래서 인터페이스를 먼저 정의하는게 도움이 된다.

2. 컴포넌트 나누는 이유를 다시 한 번 생각하는 습관
    - 우리는 경험적으로 로직이 한 곳에 있으면 파악하기 힘들다는 것을 알고있다. 그래서 하나의 애플리케이션을 여러 개의 컴포넌트로 나누어 개발한다. 또 우리는 반복되는 부분을 모듈화해두면 좋다는 것을 알고 있다. ‘애플리케이션을 나눈다’, ‘모듈화한다’가 위에서 다룬 내용이다. 지금 컴포넌트를 나누는 행위가 복잡도를 낮추기 위한 것인지, 재사용하기 위함인지, 꼭 분리해아하는 컴포넌트인지 고민해볼 필요가 있다. 우리는 제품을 만들면서 끊임없이 컴포넌트를 만다. 잘 만든 컴포넌트는 미래의 나에게 큰 도움이 된다. 이미 해결한 문제를 또 해결할 필요가 없기 때문이다. 이것은 나와 동료에게도 도움이 된다. 결국 이런 애질리티는 비즈니스 기초가 된다. 변경에 유연한 코드는 안정적으로 비즈니스를 운영하면서 빠른 속도를 유지하는데 필수적인 요소이기 때문이다. 
