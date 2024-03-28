import FirstComponent from './FirstComponent';
import { ThirdComponent } from './FirstComponent';
import SecondComponent from './SecondComponent';
import LearningJavaScript from './LearningJavaScript';

export function LearinigComponent() {
  return <div className="LearinigComponent">
    MyFirst App
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    <LearningJavaScript/>
  </div>;
}
