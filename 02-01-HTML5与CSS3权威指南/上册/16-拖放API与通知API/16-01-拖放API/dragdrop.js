jQuery.fn.dragstart = function(handler) {
    return this.each(function() {
        this.addEventListener("dragstart", handler, false);
    });
};

jQuery.fn.drag = function(handler) {
    return this.each(function() {
        this.addEventListener("drag", handler, false);
    });
};

jQuery.fn.dragenter = function(handler) {
    return this.each(function() {
        this.addEventListener("dragenter", handler, false);
    });
};

jQuery.fn.dragover = function(handler) {
    return this.each(function() {
        this.addEventListener("dragover", handler, false);
    });
};

jQuery.fn.dragleave = function(handler) {
    return this.each(function() {
        this.addEventListener("dragleave", handler, false);
    });
};

jQuery.fn.drop = function(handler) {
    var handler1 = function(event) {
        handler(event);
        event.preventDefault();
        event.stopPropagation();
    };
    return this.each(function() {
        this.addEventListener("drop", handler, false);
    });
};

jQuery.fn.dragend = function(handler) {
    var handler1 = function(event) {
        handler(event);
        event.preventDefault();
    };
    return this.each(function() {
        this.addEventListener("dragend", handler, false);
    });
};