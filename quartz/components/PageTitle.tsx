import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  console.log(cfg.baseUrl)
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/icon.png")
  console.log(baseDir)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <img id='icon-header' src={iconPath} alt="" width={40} />
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: .5;
  font-size: 1.5rem;
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
