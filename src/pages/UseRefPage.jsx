import Counter from "../components/Counter";
import Stopwatch from "../components/Stopwatch";
import ControlledForm from "../components/ControlledForm";
import UncontrolledForm from "../components/UncontrolledForm";

export default function UseRefPage() {
    return (
        <>
        <h3>UseRef Counter Example</h3>
        <Counter />
        <h3>UseRef Stopwatch Example</h3>
        <Stopwatch/>
        <h3>Controlled Form - using state</h3>
        <ControlledForm />
        <h3>Uncontrolled From - using ref</h3>
        <UncontrolledForm/>
        </>
    )
}