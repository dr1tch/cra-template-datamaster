/**
 * @function makeTree(nodes, pereId): function to generate the menu tree elements.
 * @param nodes: routes
 * @param pereId: id of the parent route
 * @returns : List of menu tree elements : {
 *  id : the id of the route,
 * path: path to the route,
 * name: name that will show up on the sidebar,
 * icon: icon that will show up on the sidebar,
 * pere: id of the parent route,
 * subRoutes: List of sub menu tree
 * }
 */
export function makeMenuTree(
    nodes, // routes
    pereId = null // id of the parent route
) {
    return nodes
        .filter((node) => node.pere === pereId)
        .reduce(
            (tree, node) => [
                ...tree,
                {
                    // ...node,
                    id: node.id,
                    path: node.path,
                    name: node.name,
                    icon: node.icon,
                    pere: node.pere,
                    children: makeMenuTree(nodes, node.id),
                },
            ], []
        );
}