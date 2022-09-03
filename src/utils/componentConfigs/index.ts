import Body from "../../components/Body";
import { Button } from "../../components/ButtonComponent/Button";
import Footer from "../../components/Footer";
import MultipleChoice from "../../components/MultipleChoiceComponent/MultipleChoice";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Title from "../../components/TitleComponent/Title";

export const GET_ALL_COMPONENTS = {
    "text" : Title,
    "Body" : Body,
    "Footer" : Footer,
    "progress": ProgressBar,
    "multiple_choice": MultipleChoice,
    "next": Button,
    "skip": Button
}