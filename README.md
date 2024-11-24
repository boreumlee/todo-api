# todo-api

Node.js, Express, MongoDB를 사용하여 간단한 Todo 애플리케이션을 만든 프로젝트입니다. 이 애플리케이션은 사용자가 Todo 작업을 **생성(Create)**, **읽기(Read)**, **수정(Update)**, **삭제(Delete)** (CRUD) 할 수 있는 기능을 제공합니다.

## 사용된 기술
- **Node.js**: 서버 구축을 위한 자바스크립트 런타임
- **Express**: API를 구축하기 위한 웹 프레임워크
- **MongoDB**: Todo 작업을 저장하는 NoSQL 데이터베이스
- **Mongoose**: MongoDB와 상호작용하기 위한 ODM (Object Data Modeling) 라이브러리
- **dotenv**: 환경 변수 관리를 위한 라이브러리 (예: MongoDB URI)

## 사용법
애플리케이션은 RESTful API를 통해 CRUD 작업을 지원합니다. 아래에 API 엔드포인트를 참고하여 사용할 수 있습니다.

## API 엔드포인트

- **GET /todos**  
  모든 Todo 작업을 조회합니다.
  
  **응답 예시**:
  ```json
  [
    {
      "_id": "5f63f1c1f1c1f1c1c1c1c1c1",
      "task": "Todo 작업 1",
      "completed": false
    },
    {
      "_id": "5f63f2c1f2c2f2c2c2c2c2c2",
      "task": "Todo 작업 2",
      "completed": true
    }
  ]
  ```

- **POST /todos**  
  새로운 Todo 작업을 생성합니다


  **요청 예시**:
  ```json
  {
    "task": "새로운 Todo 작업",
    "completed": false
  }
  ```
  
  **응답 예시**:
  ```json
  {
    "_id": "5f63f3c1f3c3f3c3c3c3c3c3",
    "task": "새로운 Todo 작업",
    "completed": false
  }
  ```

- **PUT /todos/:id**  
  특정 Todo 작업을 수정합니다.

  **요청 예시**:
  ```json
  {
    "task": "수정된 Todo 작업",
    "completed": true
  }
  ```
  
  **응답 예시**:
  ```json
  {
    "_id": "5f63f3c1f3c3f3c3c3c3c3c3",
    "task": "수정된 Todo 작업",
    "completed": true
  }
   ```
- **DELETE /todos/:id**  
    특정 Todo 작업을 삭제합니다.
    
    **응답 예시**:
    ```json
    {
      "message": "Todo 작업이 성공적으로 삭제되었습니다."
    }
    ```
