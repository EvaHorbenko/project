        /* ----     ---- M E N U ----     ----  */
const menu = $("#menu");
const navWrapper = menu.find(".nav-wrapper");
const menuItemWrapper = navWrapper.find(".item-wrapper") // item wrapper
const navItem = menuItemWrapper.find(".nav-item") // main item

const showList = (event) => {
    const currentNavItem = $(event.currentTarget);
    const menuInnerWrapper = currentNavItem.find(".inner-wrapper");
    menuInnerWrapper.addClass("show")
}
const hideList = (event) => {
    const currentNavItem = $(event.currentTarget);
    const menuInnerWrapper = currentNavItem.find(".inner-wrapper");
    menuInnerWrapper.removeClass("show")
}

$(navItem).mouseenter(showList)
$(navItem).mouseleave(hideList)

        /* S C R O L L     T O */

const menuHome = menuItemWrapper.find("#home");
menuHome.click(() => {
    window.scrollTo(0, 0);
})

const ourBest = menuItemWrapper.find("#our-best");
const containerWrapperHeight = $(".container-wrapper").css("height").slice(0, 3);
const scrollToOurBest = +containerWrapperHeight;
ourBest.click(() => {
    window.scrollTo(0, scrollToOurBest);
})

const whyChoseUs = menuItemWrapper.find("#wcu");
const contentHeight = $(".content").css("height").slice(0, 3);
const contentMargin = $(".content").css("margin").slice(0, 2)*2;
const scrollToWCU = scrollToOurBest + +contentHeight + +contentMargin
whyChoseUs.click(() => {
    window.scrollTo(0, scrollToWCU)
})

const whatWeDo = menuItemWrapper.find("#wwd");
const reasonContainerHeight = $(".reason-container").css("height").slice(0, 3);
const scrollToWWD = scrollToWCU + +reasonContainerHeight;
whatWeDo.click(() => {
    window.scrollTo(0, scrollToWWD)
})

const howWeWork = menuItemWrapper.find("#hww");
const WWDHeight = $(".what-we-do").css("height").slice(0, 3);
const WWDMargin = $(".what-we-do").css("margin").slice(0, 2)*2;
const scrollToHWW = scrollToWWD + +WWDHeight + +WWDMargin;
howWeWork.click(() => {
    window.scrollTo(0, scrollToHWW)
})

const meetOurTeem = menuItemWrapper.find("#mot");
const HWWHeight = $(".how-we-work").css("height").slice(0, 3);
const scrollToMOT = scrollToHWW + +HWWHeight + 10;
meetOurTeem.click(() => {
    window.scrollTo(0, scrollToMOT)
})

const qoow = menuItemWrapper.find("#qoow");
const MOTHeight = $(".meet-our-team").css("height").slice(0, 3);
const MOTMargin = $(".meet-our-team").css("margin").slice(0, 2)*2;
const scrollToQOOW = scrollToMOT + +MOTHeight + +MOTMargin + 10;
qoow.click(() => {
    window.scrollTo(0, scrollToQOOW)
})

const op = menuItemWrapper.find("#op");
const QOOWHeight = $(".quality-of-our-work").css("height").slice(0, 3);
const scrollToOPf = scrollToQOOW + +QOOWHeight;
op.click(() => {
    window.scrollTo(0, scrollToOPf)
})

const bwe = menuItemWrapper.find("#bwe");
const OPfHeight = $(".our-portfolio").css("height").slice(0, 3);
const OPfMargin = $(".our-portfolio").css("margin").slice(0, 2)*2;
const scrollToBWE = scrollToOPf + +OPfHeight + +OPfMargin + 10;
bwe.click(() => {
    window.scrollTo(0, scrollToBWE)
})

const fob = menuItemWrapper.find("#fob");
const BWEHeight = $(".best-work-environment").css("height").slice(0, 3);
const scrollToFOB = scrollToBWE + +BWEHeight;
fob.click(() => {
    window.scrollTo(0, scrollToFOB)
})

const menuComment = menuItemWrapper.find("#comment");
const FOBHeight = $(".from-our-blog").css("height").slice(0, 3);
const FOBMargin = $(".from-our-blog").css("margin").slice(0, 2)*2;
const scrollToComm = scrollToFOB + +FOBHeight + +FOBMargin + 10;
menuComment.click(() => {
    window.scrollTo(0, scrollToComm)
})

const oprc = menuItemWrapper.find("#oprc");// SOMETHING GOES WRONG(((
const commentHeight = $(".comment").css("height").slice(0, 3);
const commentMargin = $(".comment").css("margin").slice(0, 2);
const scrollToOPrc = scrollToComm + +commentHeight + +commentMargin;
oprc.click(() => {
    window.scrollTo(0, scrollToOPrc)
}) 

const sff = menuItemWrapper.find("#sff");
const oprcHeight = $(".our-pricing").css("height").slice(0, 3);
const oprcMargin = $(".our-pricing").css("margin").slice(0, 2)*2;
const scrollToSFF = scrollToOPrc + +oprcHeight + +oprcMargin;
sff.click(() => {
    window.scrollTo(0, scrollToSFF)
})

const menuContact = menuItemWrapper.find("#contact");
const SFFHeight = $(".some-fun-facts").css("height").slice(0, 3);
const OPrtnrHeight = $(".our-partners").css("height").slice(0, 3);
const OPrtnrMargin = $(".our-partners").css("margin").slice(0, 2)*2;
const scrollToFooter = scrollToSFF + +SFFHeight + +OPrtnrHeight + +OPrtnrMargin;

menuContact.click(() => {
    window.scrollTo(0, scrollToFooter)
})


        /* C O N T E N T     &     W H A T     W E     D O     -     S T Y L E */
const content = $(".content");
const bestBlock = content.find(".best-block");

// const whatWeDo = $(".what-we-do");
const wwdBlock = whatWeDo.find(".wwd-block");

const addBlueBcg = (event) => {
    const currentGrayElem = $(event.currentTarget);
    currentGrayElem.find(".dark-icon").addClass("blue-bcg");
}
const removeBlueBcg = (event) => {
    const currentBlueElem = $(event.currentTarget);
    currentBlueElem.find(".dark-icon").removeClass("blue-bcg");
}

$(bestBlock).mouseenter(addBlueBcg);
$(bestBlock).mouseleave(removeBlueBcg);

$(wwdBlock).mouseenter(addBlueBcg);
$(wwdBlock).mouseleave(removeBlueBcg);

        /* R E A S O N - C O N T A I N E R     -     S T Y L E */
const reasonContainer = $(".reason-container");
const reasonItems = reasonContainer.find(".reason-items");

const addBlueItem = (event) => {
    const currentDarkElem = $(event.currentTarget); 
    currentDarkElem.find(".fa").addClass("blue-item");
}
const removeBlueItem = (event) => {
    const currentLightElem = $(event.currentTarget);
    currentLightElem.find(".fa").removeClass("blue-item");
}

$(reasonItems).mouseenter(addBlueItem);
$(reasonItems).mouseleave(removeBlueItem);

        /* M E E T     O U R     T E E M     -     S T Y L E */
const meetOurTeam = $(".meet-our-team");
const motBlock = meetOurTeam.find(".mot-block");

const addBlueTitle = (event) => {
    const currentGrayTitle = $(event.currentTarget);
    currentGrayTitle.find("h3").addClass("blue-item")
}
const removeBlueTitle = (event) => {
    const currentBlueTitle = $(event.currentTarget);
    currentBlueTitle.find("h3").removeClass("blue-item")
}

$(motBlock).mouseenter(addBlueTitle)
$(motBlock).mouseleave(removeBlueTitle)

        /* F R O M     O U R     B L O G     -     S T Y L E */
const fromOurBlog = $(".from-our-blog");
const itemWrapper = fromOurBlog.find(".item-wrapper");

const addBlueText = (event) => {
    const currentGrayText = $(event.currentTarget);
    currentGrayText.find(".rm").addClass("blue-item");
}
const removeBlueText = (event) => {
    const currentBlueText = $(event.currentTarget);
    currentBlueText.find(".rm").removeClass("blue-item");
}

$(itemWrapper).mouseenter(addBlueText)
$(itemWrapper).mouseleave(removeBlueText)

        /* O U R     P R I C I N G     -     S T Y L E */
const ourPricing = $(".our-pricing");
const pricingItems = ourPricing.find(".pricing-items");

const addBlueTextBlueBcg = (event) => {
    const currentPricingBlock = $(event.currentTarget);
    currentPricingBlock.find(".pr-header").addClass("blue-item");
    currentPricingBlock.find(".pr-footer").addClass("light-item blue-bcg");
}
const removeBlueTextBlueBcg = (event) => {
    const currentPricingBlock = $(event.currentTarget);
    currentPricingBlock.find(".pr-header").removeClass("blue-item");
    currentPricingBlock.find(".pr-footer").removeClass("light-item blue-bcg");
}

$(pricingItems).mouseenter(addBlueTextBlueBcg)
$(pricingItems).mouseleave(removeBlueTextBlueBcg)

        /* O U R     P A R T N E R S     -     S T Y L E */
const ourPartners = $(".our-partners");
const oprtnrItem = ourPartners.find(".oprtnr-item");
const oprtnrImg = oprtnrItem.find("img");

const addBlueHighlight = (event) => {
    const currentOPrtnrImg = $(event.currentTarget);
    currentOPrtnrImg.addClass("highlight");
}
const removeBlueHighlight = (event) => {
    const currentOPrtnrImg = $(event.currentTarget);
    currentOPrtnrImg.removeClass("highlight");
}

$(oprtnrImg).mouseenter(addBlueHighlight)
$(oprtnrImg).mouseleave(removeBlueHighlight)

        /* S A M E    " F O R     F R O M     O U R     B L O G "    A N D    " C O M M E N T "    -     A R R O W S     -     S T Y L E */
const arrowIcons = $(".arrow-icons");
const fobIconWrapper = arrowIcons.find(".fob-icon");

const addBigArrow = (event) => {
    const currentArrow = $(event.currentTarget);
    const currentItem = currentArrow.find("i");
    currentItem.css({fontSize : "25px", transition: "500ms"});
}
const removeBigArrow = (event) => {
    const currentArrow = $(event.currentTarget);
    const currentItem = currentArrow.find("i");
    currentItem.css({fontSize: "20px", transition: "500ms"})
}

$(fobIconWrapper).mouseenter(addBigArrow)
$(fobIconWrapper).mouseleave(removeBigArrow)