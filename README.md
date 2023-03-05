<div align="center">

  <h1 align="center">Synchronising with effects</h1>
  <p>
    This repository is about using the useEffect hook to synchronise react components with an external system.
  </p>
</div>

### Important points to consider

- The useEffect hook dependencies

  ```sh
  useEffect (
  //This runs after every render
  )
  ```

  ```sh
  useEffect (
  //This runs on mount (when the component appears on the screen)
  , [])
  ```

  ```sh
  useEffect (
  //This runs on mount *and also* if either a or b have changed since the last render
  , [a, b])
  ```
