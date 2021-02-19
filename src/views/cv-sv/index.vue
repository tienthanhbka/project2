<template>
  <div class="cv-container">
    <cv-header
      id="cv-header"
      @saveCV="saveCV"
      @editLayout="editLayout"
      @ChangeFontSize="ChangeFontSize"
    />
    <cv-body id="cv-body" class="body-cv" ref="body" :size="FontSize" />
    <cv-footer id="cv-footer" />
  </div>
</template>
<script>
import CvFooter from "./component/cv-footer";
import CvBody from "./component/cv-body";
import CvHeader from "./component/cv-header";

export default {
  components: { CvHeader, CvFooter, CvBody },
  data() {
    return {
      FontSize: 0
    };
  },
  methods: {
    saveCV() {
      console.log(this.$refs.body);
      this.$refs.body.print();
    },
    editLayout() {
      this.$refs.body.editLayout();
    },
    ChangeFontSize(item) {
      console.log(item);
      this.FontSize = item.value;
    }
  },
  mounted() {
    window.onscroll = function() {
      myFunction();
    };
    var header = document.getElementById("cv-header");
    var suggestion = document.getElementById("cv-suggestion-inner");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        suggestion.classList.add("sticky-suggestion");
      } else {
        header.classList.remove("sticky");
        suggestion.classList.remove("sticky-suggestion");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$bg: #f6f6f6;
.cv-container {
  width: 100%;
  min-height: 100vh;
  background-color: $bg;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  transition: 0.5s;
  z-index: 1000;
}

.sticky + .body-cv {
  padding-top: 100px;
}
#cv-footer {
  clear: both;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  border: none;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  vertical-align: baseline;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
</style>
