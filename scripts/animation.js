        /* M E N U     I T E M - W R A P P E R */
/* const menuSign = $("#menu").find("i");
const menuItems = $("#menu").find(".nav-wrapper");
console.log(menuItems)
 */
        /* ----     ---- C O N T A I N E R     W R A P P E R ----     ----  */
const containerWrapper = $(".container-wrapper");
const headerImg = containerWrapper.find(".header-img");

let currentHeaderImgSrs = headerImg.attr("src");
let nextHIS = 0;
let headerImgSrcNum = 1;

const changeHeaderImg = () => {
    if (headerImgSrcNum < 8) {
        nextHIS = currentHeaderImgSrs.replace(`${+ currentHeaderImgSrs.slice(currentHeaderImgSrs.length - 5, currentHeaderImgSrs.length - 4)}`, `${headerImgSrcNum}`);
        headerImg.attr("src", nextHIS);
        headerImgSrcNum += 1;
    } else {
        headerImgSrcNum = 1;
        nextHIS = currentHeaderImgSrs.replace(`${+ currentHeaderImgSrs.slice(currentHeaderImgSrs.length - 5, currentHeaderImgSrs.length - 4)}`, `${headerImgSrcNum}`);
        headerImg.attr("src", nextHIS);
        headerImgSrcNum += 1;
    }
}

let timeInterval = setInterval(changeHeaderImg, 3000);

        /* ----     ---- O U R     P O R T F O L I O ----     ----  */
const ourPortfolio = $(".our-portfolio");
const OPCathegoty = ourPortfolio.find(".cathegoty-item");
const portfolioItem = ourPortfolio.find(".portfolio-item");
const OPItem = ourPortfolio.find(".item");

const OPFilter = (event) => {
    const currentFilterBtn = $(event.currentTarget);
    const currentFilterBtnData = currentFilterBtn.data("cathegory");
    const currentElemId = currentFilterBtnData;
    OPItem.addClass("hide");

    if (currentElemId == "all") {
        OPItem.removeClass("hide");
    } else if (currentElemId == "gd") {
        portfolioItem.find(".gd").removeClass("hide");
    } else if (currentElemId == "wd") {
        portfolioItem.find(".wd").removeClass("hide");
    } else if (currentElemId == "photo") {
        portfolioItem.find(".photo").removeClass("hide");
    } else if (currentElemId == "pd") {
        portfolioItem.find(".pd").removeClass("hide");
    }
}

OPCathegoty.click(OPFilter);

        /* ----     ---- F R O M     O U R     B L O G ----     ----  */
// const fromOurBlog = $(".from-our-blog");    // whole block ((from file ./styles.js))
const fobItemWrapper = fromOurBlog.find(".fob-item-wrapper");   //item with pics wrapper
const fobItem = fromOurBlog.find(".item-wrapper");      // each item   --  colection   --  .length = 6
const fobWidth = Number(fromOurBlog.width());
const fobItemWidth = Number(fobItem.width());
const fobItemMarginR = Number(fobItem.css("marginRight").slice(0, 2));
const fobItemMarginL = Number(fobItem.css("marginLeft").slice(0, 2));
const fobStep = fobItemWidth + fobItemMarginR + fobItemMarginL;

const instrument = $(".instrument");
const grayBtn = instrument.find(".gray-btn");

// const arrowIcons = fromOurBlog.find(".arrow-icons");     // btns wrapper < > (backward forward) -- ((from file ./styles.js))
const fobIcon = fromOurBlog.find(".fob-icon");      // each btn (backward forward)  --  colection   --  .length = 2 
let translateX = 0;

const FOBSlider = (event) => {
    if (!fobItemWrapper.hasClass("view-all")) {
        const currentBtn = $(event.currentTarget);
        if (currentBtn.attr("id") == "forward") {             // forward
            if (translateX < fobStep*fobItem.length - (fobStep*(fobWidth/fobItemWidth))) {
                translateX += fobStep;
                fobItemWrapper.css({transform: `translateX(-${translateX}px)`, transition: "500ms"});
            }
        } else if (currentBtn.attr("id") == "backward") {     // backward
            if (translateX >= fobStep) {
                translateX -= fobStep;
                fobItemWrapper.css({transform: `translateX(-${translateX}px)`, transition: "500ms"});
            }
        }
    }
}
const viewAll = () => {
    fobItemWrapper.css({transform: "translateX(0px)", transition: "500ms"});
    fobItemWrapper.toggleClass("view-all");
    translateX = 0;

    if (fobItemWrapper.hasClass("view-all")) {
        grayBtn.text("HIDE ALL");
    } else if (!fobItemWrapper.hasClass("view-all")) {
        grayBtn.text("VIEW ALL");
    }
}
fobIcon.click(FOBSlider);
grayBtn.click(viewAll);

        /* ----     ---- C O M M E N T ----     ----  */
const comment = $(".comment");
const commentWrapper = comment.find(".comment-wrapper");
const figureInner = commentWrapper.find(".cw-figure-inner"); // comment-text

const infoWrapper = commentWrapper.find(".cw-info-wrapper"); // info about human
const IWName = infoWrapper.find("h3"); // name
const IWPosition = infoWrapper.find("h5"); // position
const IWSpecialisation = infoWrapper.find("h4"); // specialisation

const commentArrowIcons = commentWrapper.find(".arrow-icons");  // btns wrapper < >
const commentFOBIcon = commentWrapper.find(".fob-icon");    // each btn (backward forward)  --  colection   --  .length = 2

const commentImgWrapper = comment.find(".comment-img-wrapper");
const commentImg = commentImgWrapper.find("img");   // human photo

const moreCommentWrapper = comment.find(".more-wrapper");
const moreCommentImg = moreCommentWrapper.find("img");  // other humans photos
const firstMCI = moreCommentWrapper.find("#first-img"); // first round img
const secondMCI = moreCommentWrapper.find("#second-img"); // second round img

const commentChanging = () => {
    figureInner.text(`${COMMENT[currentPerson][0].comment}`)
    IWName.text(`${COMMENT[currentPerson][1].name.toUpperCase()}`)
    IWPosition.text(`${COMMENT[currentPerson][2].position.toUpperCase()}`)
    IWSpecialisation.text(`${COMMENT[currentPerson][3].specialisation.toUpperCase()}`)

    commentImg.attr("src", (`${COMMENT[currentPerson][4].imgSrc}`))

    firstMCI.attr("src", (`${COMMENT[1][4].imgSrc}`))
    secondMCI.attr("src", (`${COMMENT[2][4].imgSrc}`))

    if (currentPerson == 0) {
        firstMCI.attr("src", (`${COMMENT[1][4].imgSrc}`))
        secondMCI.attr("src", (`${COMMENT[2][4].imgSrc}`))
    } else if (currentPerson == 1) {
        firstMCI.attr("src", (`${COMMENT[2][4].imgSrc}`))
        secondMCI.attr("src", (`${COMMENT[0][4].imgSrc}`))
    } else if (currentPerson == 2) {
        firstMCI.attr("src", (`${COMMENT[0][4].imgSrc}`))
        secondMCI.attr("src", (`${COMMENT[1][4].imgSrc}`))
    }
}

let currentPerson = 0;
commentChanging();

const changeComment = (event) => {
    const currentBtn = $(event.currentTarget);
    if(currentBtn.attr("id") == "forward") {
        currentPerson += 1;
        if (currentPerson < COMMENT.length) { 
            commentChanging();
        } else {
            currentPerson = 0;
            commentChanging();
        }
    } else if(currentBtn.attr("id") == "backward") {
        currentPerson -= 1
        if (currentPerson < 0) {
            currentPerson = COMMENT.length - 1
            commentChanging();

        } else if (currentPerson < COMMENT.length) {
            commentChanging();
        }
    }
}

commentFOBIcon.click(changeComment)

        /* ----     ---- F O O T E R ----     ----  */
const footer = $(".footer");
const contact = footer.find(".contact");
const textfield = contact.find(".textfield");
const button = contact.find("button");

const checkForm = (event) => {
    $(event.preventDefault());
    let isFormError = false;
    textfield.each(currentTextField => {
        let isTextfieldError = checkTextField(null, currentTextField);
        if (isTextfieldError) {
            isFormError = true;
        }
        textfield.toggleClass("wrong", isFormError)
    });
}

const checkTextField = (event, textfield) => {
    const currentTextField =  textfield ? textfield : $(event.currentTarget);
    const currentTextFieldValue = currentTextField.val();
    const currentRegexp = new RegExp(REGEXPS[currentTextField.attr("name")]);
    const isTextfieldError = !currentRegexp.test(currentTextFieldValue);
    
    currentTextField.toggleClass("wrong", isTextfieldError);
    return isTextfieldError;
}

button.submit(checkForm)
textfield.each(currentTextField => {
    currentTextField.blur = checkTextField;
});

textfield.blur(checkTextField)