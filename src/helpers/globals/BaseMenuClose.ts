export default function(context: any, meta: any) {
    context.menu.visibility = false
    context.menu.posX = ''
    context.menu.posY = ''
    if (meta) context.menu.meta = meta
}