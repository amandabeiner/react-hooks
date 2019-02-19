amanda = User.create(
  name: "Amanda Beiner",
  email: "amanda@privy.com",
  photo: "https://res.cloudinary.com/dpuzgzqir/image/upload/ar_1:1,c_fill,g_auto,e_art:hokusai/v1550589715/Headshot_Amanda_qr7c7w.jpg"
)

patrick = User.create(
  name: "Patrick McLaren",
  email: "patrick@privy.com",
  photo: "https://res.cloudinary.com/dpuzgzqir/image/upload/v1550589891/Screenshot_from_2019-02-19_10-23-24_wkwqrv.png"
)

allina = User.create(
  name: "Allina Dolor",
  email: "allina@privy.com",
  photo: "https://res.cloudinary.com/dpuzgzqir/image/upload/v1550589891/Screenshot_from_2019-02-19_10-24-05_alagn2.png"
)

josh = User.create(
  name: "Josh Lopes-Baptista",
  email: "joshua@privy.com",
  photo: "https://res.cloudinary.com/dpuzgzqir/image/upload/v1550589891/Screenshot_from_2019-02-19_10-24-27_sabpqp.png"
)

react = Tag.create(name: "react")
rails = Tag.create(name: "rails")
html  = Tag.create(name: "html")
css   = Tag.create(name: "css")

react_docs = Post.create(
  title: "React Docs",
  link: "https://reactjs.org/docs/getting-started.html",
  description: "Learn react by reading the docs",
  user: patrick,
  tags: [react]
)

rails_react = Post.create(
  title: "Creating a Monolithic Rails + React/Redux application",
  link: "https://medium.com/@trydelight/creating-a-monolithic-rails-react-redux-application-56edf9a404ea",
  description: "A guide on how to bootstrap a new rails and react application with redux",
  user: allina,
  tags: [react, rails]
)

redux = Post.create(
  title: "Redux: Not Dead Yet!",
  link: "https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/",
  description: "Redux isn't dead yet according to a redux maintainer who is certainly unbiased",
  user: josh,
  tags: [react]
)

html_access = Post.create(
  title: "A11y accessibility checklist",
  link: "https://a11yproject.com/checklist",
  description: "Cool resource for making sure that our applications are a11y compliant for users with assistive devices and disabilities",
  user: amanda,
  tags: [html]
)

html_css = Post.create(
  title: "Refactoring UI",
  link: "https://refactoringui.com/",
  description: "Like HGTV for developers",
  user: amanda,
  tags: [html, css]
)
