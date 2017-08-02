const rule = {

  after: function(state) {
    state.push('["discourse-yuml"]', -1);
  }
};

function replaceYumlDiagram(text) {
    while (text !== (text = text.replace(/\[yuml\]([\s\S]*?)\[\/yuml\]/ig, function(match, contents) {
            var uri = "http://yuml.me/diagram/scruffy/class/" + encodeURIComponent(contents.replace(/\n/g, ","));
            return "<img src=\"" + uri + "\" />";
        })));
    return text;
}

export function setup(helper) {
    helper.whiteList(['img']);
    helper.addPreProcessor(text => replaceYumlDiagram(text));
}
