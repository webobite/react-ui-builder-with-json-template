// import Button from "@material-ui/core/Button/Button";
import Body from "../../components/Body";
import ControlOption from "../../components/ControlOption/ControlOption";
import { Button } from "../../components/ButtonComponent/Button";
import Footer from "../../components/Footer";
import MultipleChoice from "../../components/MultipleChoiceComponent/MultipleChoice";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Title from "../../components/TitleComponent/Title";
import ImagePlaceholder from "../../components/ImagePlaceholder/ImagePlaceholder";

export const GET_ALL_COMPONENTS = {
    "text_v1" : Title,
    "Body" : Body,
    "Footer" : Footer,
    "progress_v1": ProgressBar,
    "multiple_choice_v1": MultipleChoice,
    "multiple_choice_v3": MultipleChoice,
    "next_v1": Button,
    "skip_v1": Button,
    "control_option_v1": ControlOption,
    "image_placeholder_v1": ImagePlaceholder
}